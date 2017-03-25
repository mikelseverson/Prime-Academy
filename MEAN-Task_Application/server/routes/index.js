var express = require('express');
var path = require('path');
var router = express.Router();

//Catch-all for serving index.html
router.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;