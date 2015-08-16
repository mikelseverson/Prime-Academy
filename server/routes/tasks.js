var express = require('express');
var path = require('path');
var Task = require('../models/Task');
var router = express.Router();

//query all tasks
router.get("/", function(req, res){
    Task.find(function(err, tasks) {
        res.send(tasks);
    });
});

//Create task request handler
router.post("/create", function(req, res){
    Task.create({desc : req.body.task, completed : false }, function(err, task) {
        if (!err) {
            console.log("Created Task: " + task.desc);
        } else {
            console.log(err);
        }
        return res.send(task);
    });
});

//Handles requests for task status change
router.put("/:id/swap-status", function(req, res) {
    Task.findById(req.params.id, function(err,task) {
        task.completed = !task.completed;
        return task.save(function(err) {
            if (!err) {
                console.log("Status Swapped: " + task.desc);
            } else {
                console.log(err);
            }
            return res.send(task);
        });
    });
});

//Delete task request handler
router.delete("/:id/delete", function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, task) {
        if (!err) {
            console.log("Deleted Task: " + task.desc);
            return res.send("Deleted Task: " + task.desc);
        } else {
            console.log(err);
            return res.send("Sorry, We failed to remove your task.");

        }
    });
});

module.exports = router;