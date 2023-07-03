const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  const response = { message: 'Hello' };
  res.json(response);
});
app.get('/health', (req, res) => {
  res.send('Health Checked!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
