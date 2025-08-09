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
    if (allowedOrigins.includes(origin)) {
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

// ✅ Explicitly handle OPTIONS requests
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.post('/api/register', async (req, res) => {
  console.log('Request received at /api/register:', req.body);

  const { fullName, email, phone, location, timestamp } = req.body;

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwNVzfhkWl4NI1u8ADODs6tuM0NE5j-gL52Ghck6zCetew-A5fHDUKQpdhbQoh9ZaqABw/exec",
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
