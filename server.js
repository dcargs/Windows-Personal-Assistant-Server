var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 55554;

// this allows cross origin access (you need this for mobile apps)
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
};

//Configure body-parser to use URLENCODED and json
//This is basic setup stuff for the server
app.use(allowCrossDomain);//uses the above cors function
app.use(bodyParser.urlencoded({ extended:true, limit: '500mb' }));
app.use(bodyParser.json({limit: '500mb'}));


app.use('/task', require('./app/task.js'));
app.use('/event', require('./app/event.js'));
app.use('/note', require('./app/note.js'));

app.listen(port);
console.log("App running on port " + port);
