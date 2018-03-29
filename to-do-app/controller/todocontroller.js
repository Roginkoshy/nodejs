var bodyParser=require('body-parser');

var data=[{item:'get milk'},{item:'do homework in class'},{item:"be funny"}];

var ulrencodedParser=bodyParser.urlencoded({extended:false});

module.exports=function(app){

app.get('/todo',function(req,res){
 
 res.render('todo',{todos:data});

});

app.post('/todo',ulrencodedParser,function(req,res){
   
data.push(req.body);
res.json(data);
});


app.delete('/todo/:item',function(req,res){
data=data.filter(function(todo){
	return todo.item.replace(/ /g,'-')!==req.params.item; 

});
res.json(data);

});



};