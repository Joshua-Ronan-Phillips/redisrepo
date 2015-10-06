var http = require('http');
var fs = require('fs');
var redis = require("redis");
var client = redis.createClient();
var frontend = fs.readFileSync(__dirname + '/public/frontend.js');
var index = fs.readFileSync(__dirname + '/public/index.html');

var port = process.env.PORT || 8000;

function handler(request, response) {
    var url = request.url;
    var req = url.split('/');
    var input = req[2];
    console.log(input);
    if (url.length === 1) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(index);
    } else if (request.url.indexOf('/post') > -1) {
        console.log('post');
        client.rpush("favourites", input, function(err, reply){
          
        });
        client.lrange('favourites', 0,-1, function(err, reply){
          var list = reply.toString();
          console.log(reply);
        });


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

}
http.createServer(handler).listen(port);
