var express=require('express');

var app=express();

app.get('/',function(req,res){
res.send('this is home page!');
});



app.get('/contact',function(req,res){
res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:id',function(req,res)
{
res.send('You requested to see a profile with the name of '+req.params.id);
});

app.listen(3000);