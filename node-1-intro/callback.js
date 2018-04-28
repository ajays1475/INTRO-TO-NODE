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
        console.log('The results are:'+results);
    }
};

evenDoubler(2,eventHandler);
evenDoubler(3,eventHandler);
evenDoubler(10,eventHandler);

console.log('-----');