/**
 * Created by mikelseverson on 8/6/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var adjective = require('../public/data/adjective.json');
var modadj = require('../public/data/modadj.json');
var noun = require('../public/data/noun.json');

//Handles query for all students in data.json
router.get("/data/nouns", function(req, res){
    res.send(noun);
});
router.get("/data/modadj", function(req, res){
    res.send(modadj);
});
router.get("/data/adj", function(req, res){
    res.send(adjective);
});

//Catch-all for serving index.html
router.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;