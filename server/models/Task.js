var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    desc : String,
    completed : Boolean
});

module.exports = mongoose.model("Task", TaskSchema);