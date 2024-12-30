const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle JSON requests
app.use(express.json());

// API endpoint to fetch random message
app.get('/random-message', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: 'Give me a random motivational message.',
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const message = response.data.choices[0].text.trim();
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch message from OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
