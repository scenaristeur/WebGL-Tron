"use strict";

  var host = window.document.location.host;
  var socket = io(host);
  socket.on('connect', function(){
    console.log("connecte");
  });
  socket.on('event', function(data){
    console.log(data);
  });
  socket.on('disconnect', function(){
    console.log("deconnecte");
  });
  console.log(socket);
