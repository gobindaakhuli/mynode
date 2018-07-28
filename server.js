var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
res.writeHead(200, {"Content-Type": "text/html"});
if (page == '/') {
res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>My Node.js page!</title>'+
' </head>'+ 
' <body>'+
' <p>WELCOME to my first <strong>NODEJS</strong> application!1</p>'+
'<p>You are at the reception desk. How can I help you?</p>'+
' </body>'+
'</html>');
}
else if (page == '/basement') {
  res.write('You\'re in the wine cellar. These bottles are mine!');
}
else if (page == '/floor/1/bedroom') {
  res.write('Hey, this is a private area!');
}
res.end();
});

server.listen(8080);
