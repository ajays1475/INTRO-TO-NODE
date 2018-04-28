var http = require('http');

var socket = require('socket.io');

var fs = require('fs');

var handler = function (req,res) {
    fs.readFile(__dirname+'/3-index.html',function(err,data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        else{
            res.writeHead(200);
            res.end(data);
        }
    })
}

var app = http.createServer(handler);
var io = socket.listen(app);

io.sockets.on('connection',function(socket){
    setInterval(function(){
        var timestamp = Date.now;
        console.log('Emitted:'+timestamp);
        socket.emit('timer',timestamp)
    },2000);
    socket.on('submit',function(data){
        console.log('Submitted: '+data);
    })
})

app.listen(8080);

console.log('Server running');