const express = require('express');
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world')
  .status(200);
});

app.listen(port, () => console.log(`HTTP Server is running on port : ${port}`));