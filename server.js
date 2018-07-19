var http = require('http');


var server = http.createServer(function(req, res) {

res.writeHead(200);

res.end('Hi this is my first node js app, hello from openshift');

});

server.listen(8080);
