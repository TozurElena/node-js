const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT,  (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}` );
});

// otpravluem donnes de server à brauser
app.get('/', (req, res) => {
  // send utilise à lieux read et write
  res.sendFile(createPath('index'));
})

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
})

app.get('/posts/:id', (req, res) => {
  res.sendFile(createPath('post'));
})

app.get('/posts', (req, res) => {
  res.sendFile(createPath('posts'));
})

app.get('/add-post', (req, res) => {
  res.sendFile(createPath('add-post'));
})

app.get('/about-us', (req, res) => {
  res.redirect('contacts');
})

app.use( (req, res) => {
  res
    .status(404)
    .sendFile(createPath('error'));
})