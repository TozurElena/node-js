const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/creata-path');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const db = 'mongodb+srv://TozurElena:Pass321@cluster0.devdv1d.mongodb.net/node-blog?retryWrites=true&w=majority';

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
// creer middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// creer middleware pour parsing donnes
app.use(express.urlencoded({extended: false}));

// faire style dostupnimi
app.use(express.static('styles'));
// module pour edit les données
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.use(postRoutes);
app.use(contactRoutes);

// middleware pour perehvata error, doit etre en fin
app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});