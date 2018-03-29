var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
console.log('request was made '+req.url);
res.writeHead(200,{'Content-Type':'html'});
var myReadStream=fs.createReadStream('index.html');
myReadStream.pipe(res);
});

server.listen(3000,'127.1.1.1');
console.log('yo bros ,currently in port 3000!');