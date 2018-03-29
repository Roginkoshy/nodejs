console.log('hi dude!');
console.log(__dirname);
console.log(__filename);
time =0;
var timer=setInterval(function(){
time+=2;
console.log(time+" seconds have passed!");
if(time>5)
	{
		clearInterval(timer);
	}
},2000);
