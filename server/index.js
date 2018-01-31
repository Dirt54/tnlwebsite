var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var clientPath = path.join(__dirname, '../client');
// var api = require('./api');

var prerender = require('prerender-node');

prerender.set('prerenderToken', process.env.PRERENDER_KEY);
app.use(prerender);

app.use(express.static(clientPath));
app.use(bodyParser.json()); 

// app.use('/api', api);



app.listen(process.env.PORT || 3000);