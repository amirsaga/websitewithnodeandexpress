var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views','app/views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speaker'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));


var server = app.listen(app.get('port'), function() {
    console.log('Ready on port ' + app.get('port'));
});

reload(server, app);
// var http = require('http');

// var myServer = http.createServer(function(request, response){
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write('Running on browser');
//   response.end();
// });

// myServer.listen(3000);
// console.log('Ready to run');
