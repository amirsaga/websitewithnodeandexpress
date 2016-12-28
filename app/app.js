var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Run with express');
});

var server = app.listen(3000, function() {
    console.log('Ready on port 3000');
});

// var http = require('http');

// var myServer = http.createServer(function(request, response){
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write('Running on browser');
//   response.end();
// });

// myServer.listen(3000);
// console.log('Ready to run');
