/**
 * Created by mikelseverson on 7/28/15.
 */
//The third module should require the other two modules.

var randomNum = require("./module1");
var formatNum = require("./module2");



// It should have two function exports.
// The first function export should be the return of the first module being passed into the second module.
var calculate = function() {
    return formatNum(randomNum(100, 1000000));
}


// The other function should be a simple text return that says “Account balance: \n”.

module.exports = calculate;