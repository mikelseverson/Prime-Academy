var index = require('./routes/index');
var tasks = require('./routes/tasks');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoURI = "mongodb://localhost:27017/MeanTaskApp";

var mongoDB = mongoose.connect(mongoURI).connection;
var app = express();

mongoDB.on('error', function(err){
    if(err) console.log("MONGO ERROR: ", err);
});

mongoDB.once('open', function(){
    console.log("CONNECTED TO MONGODB!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

app.set('port', (process.env.PORT || 5000));
app.use('/tasks', tasks);
app.use('/', index);

app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get('port'));
});

module.exports = app;
