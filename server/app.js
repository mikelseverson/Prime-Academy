var express = require('express'); //Brings in express
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() { //app.listen(app.get('port'); is required
    console.log("listening on port " + app.get('port'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/views/index.html"))
});