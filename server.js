var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/public/index.html');


// set the port for the server
var port = process.env.PORT || 8000;

function handler(request, response) {
    //display 'HELLO WORLD' when the user is on the home page
    var url = request.url; //e.g. '/'
    if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index);
  }
}

http.createServer(handler).listen(port);
