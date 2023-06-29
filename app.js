const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/health', (req, res) => {
  res.send('Health Checked!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
