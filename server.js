const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'rext/html; charset=utf-8');
  res.end('<h1>Hello World</h1>');
});
// Then the server is told to listen to connections on port 3000.
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// We created the server, passing a function as a parameter of the creation method. 
// Each time our server receives a request, this function will be called.

// We don't know when a request will arrive, but we have now defined a location where we can handle it. 
// This location is our function, whether we defined it beforehand or whether it is anonymous, it doesn't matter.

// This concept is called a callback function. 
// We pass a function as a parameter of a method and this function is used to be called back when an event related to the method is triggered.

// So this method takes a callback with the parameter "res" as respons.

// We define the status that the server sends, here the status 200 assuming that the connection has been successful. 
// We also specify the header for our example html text and the charset. 
// Then we define the message that will be sent to the user.