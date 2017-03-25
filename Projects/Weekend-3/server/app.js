var express = require('express');
var path = require('path');
var data = require('./public/assets/data/data.json');
var studentCount = Object.keys(data).length;

var app = express();
app.set('port', (process.env.PORT || 5000));

//Handles queries for count of all students in data.json
app.get("/query/count", function(req, res){
    res.send({'count' : studentCount});
});

//Handles query for all students in data.json
app.get("/query/all", function(req, res){
    res.send(data);
});

//Handles queries of specific student in data.json
app.get("/query/:student", function(req, res){
    var studentNum = parseInt(req.params.student);
    if(studentNum > 0 && studentNum <= studentCount){
       res.send(data['person' + studentNum]);
    }
});

//Catch-all for serving index.html
app.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get('port'));
});