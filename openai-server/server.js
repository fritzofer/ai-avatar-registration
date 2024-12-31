const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const cors = require('cors');

const app = express();
app.use(cors());

// Use the environment variable PORT if set, otherwise fallback to 8080
const port = process.env.PORT || 8080;

console.log("API Key:", process.env.OPENAI_API_KEY);

app.get('/random-message', async (req, res) => {
  try {
    const openAIResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Give me a random motivational message.' }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const message = openAIResponse.data.choices[0].message.content;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch message from OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
