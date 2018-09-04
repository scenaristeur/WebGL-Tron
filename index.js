// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

//Socket.IO
io.on('connect', function(socket){
	console.log("connecte");
//console.log(socket);
socket.on("add_player", function(player){
  console.log("add");
  console.log(player);
  console.log("daa");
});


socket.on('disconnect', function(){
    console.log('user disconnected');
  });


});
io.on('event', function(data){
	console.log(data);
});
io.on('disconnect', function(){
	console.log("deconnecte");
});

/////////////////////////
