const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

console.log(`Server running on http://0.0.0.0:${port}`);

const port = process.env.PORT || 8181;


const openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
  console.error("OpenAI API key is not set in the environment variables.");
  process.exit(1); // Exit the process if API key is not available
}

console.log("API Key is set correctly in the environment variable.");

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
          'Authorization': `Bearer ${openaiApiKey}`,
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
