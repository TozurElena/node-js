const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log(req.url, req.method);

  // res.setHeader('Content-Type', 'text/html');
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write('<h1>Hello!</h1>');// afficher le texte dans le navigateur
  // res.write('<p>My name is Elena</p>');// 
  // touts write doit etre avant method end

  res.setHeader('Content-Type', 'application/json');
  const data = JSON.stringify([
    {name: 'Tommy', age: 35},
    {name: 'Arthur', age: 45},

  ])
  res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});