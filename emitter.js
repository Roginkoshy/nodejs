var events=require('events');
var util=require('util');
var Person=function(name){
	this.name=name;
};

util.inherits(Person,events.EventEmitter);
var james=new Person('james');
var peter=new Person('peter');
var rogue=new Person('rogue');

var people=[james,peter,rogue];

people.forEach(function(insaan){
   
   insaan.on('speak',function(msg){
     console.log(insaan.name+' said: '+msg);
   });
});

james.emit('speak','hey dudes');
rogue.emit('speak','masala');
peter.emit('speak','dont speak');