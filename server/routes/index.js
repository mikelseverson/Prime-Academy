/**
 * Created by mikelseverson on 8/11/15.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    })
);

//Catch-all for serving index.html
router.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;