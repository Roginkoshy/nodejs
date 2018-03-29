var http=require('http');

var server=http.createServer(function(req,res){
	console.log('request was made '+req.url);
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('ssup dudes!');
});

server.listen(3000,'127.1.0.1');
console.log('wassup dudes,how much can u dudes! go dudes');