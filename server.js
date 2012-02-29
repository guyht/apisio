var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Future home of APIs.io\nThe world needs an open source API service registry & API explorer.');
}).listen(15057);
