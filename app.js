const express = require('express');
const base64url = require('base64url');

const app = express();
const port = 3000;

app.get('/text-base64', (req, res) => {
  const { text } = req.query;
  const base64 = base64url.encode(text);

  res.json({ text, base64 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


