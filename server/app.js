/**
 * Created by mikelseverson on 8/6/15.
 */

var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', index);

app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get('port'));
});