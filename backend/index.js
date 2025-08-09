const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.post('/api/register', async (req, res) => {
  console.log('Request received at /api/register:', req.body);

  const { fullName, email, phone, location } = req.body;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  try {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzN0SYv6qO2AsyuDHlwIQUOFMoaI5C5EgkS-8ptc4fGhpHHPi2je4kHL3FidNJnsD6_yA/exec"; 

    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, phone, location, timestamp })
    });

    const text = await response.text();
    console.log("Raw GAS response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(500).json({
        message: "GAS returned non-JSON response",
        raw: text
      });
    }

    if (!response.ok || data.status === 'error') {
      return res.status(500).json({
        message: data.message || "GAS request failed",
        raw: data
      });
    }

    res.status(200).json({ message: 'Registration successful', data });
  } catch (error) {
    console.error('Error submitting registration form:', error);
    res.status(500).json({ 
      message: 'Failed to submit registration form', 
      error: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
