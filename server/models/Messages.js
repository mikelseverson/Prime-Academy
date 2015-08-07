/**
 * Created by mikelseverson on 8/7/15.
 */
var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    //Key : data type
    name : String,
    message : String
});


module.exports = mongoose.model("messages", PeopleSchema);