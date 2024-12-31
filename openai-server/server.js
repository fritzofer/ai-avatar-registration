const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

// Define the route before the app starts listening
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
    console.error("Error fetching message from OpenAI:", error);
    res.status(500).json({ error: 'Failed to fetch message from OpenAI' });
  }
});

// Now start listening after the routes are defined
const port = process.env.PORT || 8181;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
