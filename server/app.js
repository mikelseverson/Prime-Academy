/**
 * Created by mikelseverson on 8/1/15.
 */
var express = require('express');
var path = require('path');
var data = require('./public/assets/data.json');
var studentCount = Object.keys(data).length;

//Create app and set port
var app = express();
app.set('port', (process.env.PORT || 5000));

//Handles request for a count of all students
app.get("/query/count", function(req, res){
    res.send({'count' : studentCount});
});

//Handles request for specific student
app.get("/query/:student", function(req, res){
    console.log("received request for student " + req.params.student);
    var studentNum = parseInt(req.params.student);
    if(studentNum > 0 && studentNum <= studentCount){
       res.send(data['person' + studentNum]);
    }
});

app.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get('port'));
});