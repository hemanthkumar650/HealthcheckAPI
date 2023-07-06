const express = require('express');
const base64url = require('base64url');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const response = { message: 'Hello' };
  res.json(response);
});
app.get('/health', (req, res) => {
  res.send('Health Checked!');
});



app.get('/text-base64', (req, res) => {
  const { text } = req.query;
  const base64 = Buffer.from(text).toString('base64');

  res.json({ text, base64 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


