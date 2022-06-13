const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //  load the index.html file
  fs.readFile('./views/index.html', 'utf-8', (err, data) => {
    if (err) throw err

    //  thanks to the "request" parameter we can retrieve what was typed in the url.
    let query = url.parse(req.url, true).query;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    data = data.replace("{{name}}", query.name);
    res.end(data);
  })
  
});
// Then the server is told to listen to connections on port 3000.

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