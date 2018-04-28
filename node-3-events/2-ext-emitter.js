var Resource = require('./resource');

var r = new Resource(5);

r.on('start',function(){ //Publishing event start with on function
    console.log('I have started');
});

r.on('data',function(d){
    console.log('I received data wit h==>'+d);
});

r.on('end',function(t){
    console.log('I am done with '+t+' data events');
});

