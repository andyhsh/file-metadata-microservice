const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', (req, res) => {
  res.render('index');
});

module.exports = app;
