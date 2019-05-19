const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, error => {
  if (error) return console.log(error);
  console.log(`Server running in localhost:${PORT}`);
});