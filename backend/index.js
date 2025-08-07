const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://websites-qjlp.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
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

  // ✅ FIX: define formPayload before sending
  const formPayload = {
    fullName,
    email,
    phone,
    location,
    timestamp
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwfemK1cz_qaI4ojvurHsMppPUewuipSjGTBdK7mqW-5eEBJksGtp1iTIat5zQq8sMW4Q/exec", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload), // ✅ now this is correct
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
