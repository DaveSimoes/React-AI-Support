const axios = require('axios');

exports.handleChat = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: userMessage,
        max_tokens: 150
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const aiResponse = response.data.choices[0].text.trim();
    res.json({ message: aiResponse });
  } catch (error) {
    console.error('Error from OpenAI API:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
