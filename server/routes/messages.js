var express = require('express');
var router = express.Router();
var People = require("../models/Messages");

router.post("/", function(req, res, next){
   People.create(req.body, function(err, post){
      res.send("DATA RECEIVED!");
   });
});

router.delete("/:id", function(req, res, next) {
    console.log(req.params.id);
   People.findByIdAndRemove(req.params.id, req.body, function(err, post) {
      if(err) {
         console.log("ERROR!!! : ", err);
      }
      res.json(post);
   });
});

router.get("/", function(req, res, next){
   People.find(function(err, people){
      res.json(people);
   });
});

module.exports = router;