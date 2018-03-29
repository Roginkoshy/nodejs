var fs=require('fs');//file_sytem module
var readMe=fs.readFileSync('readMe.txt','utf8');
console.log(readMe);
//fs.writeFileSync('writeMe.txt',readMe);

fs.readFile('readMe.txt','utf8',function(err,data){
	console.log(data);
	fs.writeFile('writeMe.txt',data);
});
console.log('masala');


