const { error } = require('console');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log('Just for test');

  res.setHeader('Content-Type', 'text/html');
  //  __dirname - object global, poluchaem path to file
  const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

  let basePath = '';

  switch(req.url) {
    case '/':
    case '/home':
    case '/index.html':
      basePath = createPath('index');
      res.statusCode = 200;
      break;
    case'/about-us':  //staraia page contacts, faire redirect
      res.statusCode = 301; //redirect avec message
      res.setHeader('Location', '/contacts');
      res.end();
      break;
    case '/contacts':
      basePath = createPath('contacts');
      res.statusCode = 200;
      break;
    default:
      basePath = createPath('error');
      res.statusCode = 404;
      break;
  }
  // ouvrir pages 
    fs.readFile(basePath, (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end(); //vsegda nugno terminer reponse pour vernut control brauzery
      }
      else {
        res.write(data);
        res.end();
      }
    })
  

});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}` );
});