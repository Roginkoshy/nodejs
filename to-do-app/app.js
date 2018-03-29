var express=require('express');
var todocontroller=require('./controller/todocontroller')

var app=express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todocontroller(app);

//listening to port 3000

app.listen(3000);
console.log('you are currently listening to port 3000');