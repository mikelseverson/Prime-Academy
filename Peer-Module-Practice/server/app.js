var http = require('http');
var getBalance = require('./module3');



http.createServer(function(req, response) {
    response.writeHead(200);
    response.write("The account balance is: " + getBalance());
    response.end();
    }).listen(3000);


console.log("Listening on port 3000");

