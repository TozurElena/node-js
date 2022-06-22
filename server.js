const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
// creer middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// creer middleware pour parsing donnes
app.use(express.urlencoded({extended: false}));

// faire style dostupnimi
app.use(express.static('styles'));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.get('/contacts', (req, res) => {
  const title = 'Contacts';
  const contacts = [
    { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
    { name: 'Twitter', link: 'http://github.com/YauhenKavalchuk' },
    { name: 'GitHub', link: 'http://twitter.com/YauhenKavalchuk' },
  ];
  res.render(createPath('contacts'), { contacts, title });
});

app.get('/posts/:id', (req, res) => {
  const title = 'Post';
  const post = {
    id: '1',
    text: 'Text articles',
    title: 'Post title',
    date: '05.05.2022',
    author: 'Elena',
  }
  res.render(createPath('post'), { title, post });
});

app.get('/posts', (req, res) => {
  const title = 'Posts';
  const posts = [
    {
      id: '1',
      text: 'Text articles',
      title: 'Post title',
      date: '05.05.2022',
      author: 'Elena',
    }
  ];
  res.render(createPath('posts'), { title, posts});
});

app.post('/add-post', (req, res) => {
  const {title, author, text} = req.body;
  const post = {
    id: new Date(),
    date: (new Date()).toLocaleDateString(),
    title,
    author,
    text,
  };
  res.render(createPath('post'), {post, title});
});

app.get('/add-post', (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-post'), { title });
});
// middleware pour perehvata error, doit etre en fin
app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});