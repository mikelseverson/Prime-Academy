//The second module should accept a number and convert it to a USD value
var formatNum = function(num) {
    num = parseFloat(Math.round(num*100) / 100).toFixed(2);
    num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    num = "$" + num;
    return num;
}

module.exports = formatNum;

