const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Update allowed origins for CORS
const allowedOrigins = ['http://localhost:5173', 'https://websites-qjlp.onrender.com/'];

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
  const { fullName, email, phone, password } = req.body;

  try {
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbyvT7IytUQDRWylohhoixpZiilmxluTIDllk9enLgewH2BkX0GIOrwemZ0qrgW6qyfBGw/exec',
      {
        fullName,
        email,
        phone,
        password
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    console.log('Registration submitted:', response.data);
    res.status(200).json({ message: 'Registration form submitted successfully', data: response.data });
  } catch (error) {
    console.error('Error submitting registration form:', error.message);
    res.status(500).json({ message: 'Failed to submit registration form', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
