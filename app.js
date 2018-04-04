const express = require('express');
const uploadFile = require('./controllers/uploadFile');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', uploadFile);

module.exports = app;
