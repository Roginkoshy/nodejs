var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
  console.log('you are currently in:'+req.url);
  res.writeHead(200,{'Content-Type':'application/json'});
  var obj={
  	name: 'masala',
  	job: 'boring',
  	age: 99
  };
  res.end(JSON.stringify(obj));
});


server.listen(3000,'127.0.1.1');
console.log('bro u in port 3000');