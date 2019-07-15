const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
