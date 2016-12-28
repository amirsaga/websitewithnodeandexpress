// var express = require('express');
// var app = express();

// var server = app.listen(8080, function() {
//     console.log('Ready on port %d', server.address().port);
// });

var http = require('http');

var myServer = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('Running on browser');
  response.end();
});

myServer.listen(3000);
console.log('Ready to run');
