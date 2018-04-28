var maxtime = 1000;

evenDoubler = (v, callback) => {
    var waitTime = Math.floor(Math.random()*(maxtime+1));
    if(v%2){
        setTimeout(() => {
            callback(new Error('Odd Input'))
        },waitTime);
    }
    else{
        setTimeout(() => {
            callback(null,v*2,waitTime)
        }, waitTime);
    }
};

eventHandler = function(err, results, time){
    if(err){
        console.log('Error:'+err.message);
    }
    else{
        console.log('The results are:'+results+" ("+time+") ms");
    }
};

for(var i=0;i<10;i++){
    console.log('Calling evenDoubler for value: '+i)
    evenDoubler(i,eventHandler);
}

console.log('-----');