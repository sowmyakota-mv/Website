const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://websitefrontend-7s05.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    const isAllowed = allowedOrigins.some(o => o.toLowerCase() === origin.toLowerCase());
    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.post('/api/register', async (req, res) => {
  console.log('Request received at /api/register:', req.body);

  const { fullName, email, phone, location, timestamp } = req.body;

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxAEWYVvgtFJzFiVbTsPGNt3K3TabZjgXUF7Ck8SC3Ud2qFq_8kG2ZeFHUZ7I-1ybMUtA/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, location, timestamp })
      }
    );

    const text = await response.text(); // Read as text first
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
