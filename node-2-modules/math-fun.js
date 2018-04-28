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

module.exports.evenDoubler = evenDoubler;
module.exports.foo = 'bar';