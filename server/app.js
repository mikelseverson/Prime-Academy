/**
 * Created by mikelseverson on 8/3/15.
 */
var express = require("express");
var index = require('./routes/index');
var app = express();

app.set("port", (process.env.PORT || 5000));
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});