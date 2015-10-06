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
    }else if(request.url.indexOf('/put')>-1){
      console.log('put');
    }else if(request.url.indexOf('/display')>-1){
      console.log('displaying');
    }else if (request.url.indexOf('/delete')>-1){
      console.log('delete');
    }else{
      fs.readFile(__dirname + request.url, function(err,file){
        if (err){
          response.writeHead(404,{
            'Content-Type':'text/'+ext
          });
        }else{
          var ext = request.url.split('.')[1];
          response.writeHead(200,{
            'Content-Type':'text/'+ext
          });
          response.end(file);
        }
      });
    }


http.createServer(handler).listen(port);
}
