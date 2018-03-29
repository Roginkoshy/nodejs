var express=require('express');

var bodyParser=require('body-parser');
var app=express();
var urlencoderParser=bodyParser.urlencoded({extended: false});

app.set('view engine','ejs')

app.use('/assets',express.static('assets')); //middleware!! "styles.css wont apply without it!"

app.get('/',function(req,res){
res.render('index');
});




app.get('/contact',function(req,res){
	//console.log(req.query);
res.render('contact',{qs:req.query});
});


app.post('/contact',urlencoderParser,function(req,res){
    console.log(req.body)
    res.render('contact-success',{data:req.body});
});



app.get('/profile/:name',function(req,res)
{
	var data={
		age:29,
		job:'masala',
		hobbies:['eating','fighting','masala','dusra masala','going rogue']
	};
res.render('profile',{person: req.params.name,data: data});
});

app.listen(3000);