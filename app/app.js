var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    var info = "";
    dataFile.speakers.forEach(function(item) {
        info += `
            <li>
                <h2>${item.name}</h2>
                <p>${item.summary}</p>
            </li>
        `;

    });
    res.send(`
        <h1>Run with express</h1>
        ${info}
        `);
});

var server = app.listen(app.get('port'), function() {
    console.log('Ready on port ' + app.get('port'));
});

// var http = require('http');

// var myServer = http.createServer(function(request, response){
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write('Running on browser');
//   response.end();
// });

// myServer.listen(3000);
// console.log('Ready to run');
