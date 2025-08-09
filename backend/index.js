const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://websitefrontend-7s05.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
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
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxOHLw2YgD2w-YZjhRk4yzVJbjR2jAFefiFymbvChLXBcC7u2hM8KbkRnJss9pzaUREDA/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, location, timestamp })
      }
    );

    const text = await response.text();
    console.log("Raw GAS response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new Error(`Invalid JSON from GAS: ${text}`);
    }

    if (!response.ok) {
      throw new Error(`GAS returned ${response.status}: ${text}`);
    }

    res.status(200).json({ message: 'Registration successful', data });
  } catch (error) {
    console.error('Error submitting registration form:', error);
    res.status(500).json({ message: 'Failed to submit registration form', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
