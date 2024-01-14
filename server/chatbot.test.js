// chatbot.test.js

const axios = require('axios');

test('Chatbot API responds with expected output', async () => {
  const response = await axios.post('http://localhost:3080/', {
    message: 'Hello, how are you?'
  });

  const actualOutput = response.data.message;
  const expectedOutput = "I'm doing great, thanks for asking!";

  expect(actualOutput).toBe(expectedOutput);
});
