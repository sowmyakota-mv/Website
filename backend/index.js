// backend/index.js
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
  const formPayload = { fullName, email, phone, location, timestamp };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxCNVI0aDlpqygkqDLjm36lGiHqh5Te9WPaIwndg1Zd0nAgdOyXaLhHSzmdmBSDWMZbDQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPayload)
      }
    );

    const data = await response.json();
    console.log('Registration submitted:', data);
    res.status(200).json({ message: 'Registration form submitted successfully', data });

  } catch (error) {
    console.error('Error submitting registration form:', error.message);
    res.status(500).json({ message: 'Failed to submit registration form', error: error.message });
  }
});

app.options('/api/register', cors({
  origin: allowedOrigins,
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
