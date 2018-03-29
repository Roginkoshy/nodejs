var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
	console.log('You are currently in '+ req.url);
    if(req.url==='/'||req.url==='/home')
    {
    	res.writeHead(200,{'Content-Type':'text/html'});
    	fs.createReadStream('index.html').pipe(res);
    }
    else if(req.url==='/contact')
    { 
    	res.writeHead(200,{'Content-Type':'text/html'});
    	fs.createReadStream('contact.html').pipe(res);

    }
    else if(req.url==='/api/ninjas')
    {  
        myobj={
        	name:'Rogue',
            post:'problemsetter',
            age: 19
        };
    	res.writeHead(200,{'Content-Type':'text/html'});
    	res.end(JSON.stringify(myobj));
    }
    else
    {
    	res.writeHead(404,{'Content-Type':'text/html'});
    	fs.createReadStream('404.html').pipe(res);
    }
});
server.listen(3000,'127.1.0.0');
console.log('bro u in port 3000!!!!');