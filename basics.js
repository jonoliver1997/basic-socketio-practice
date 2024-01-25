const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
  //in websocket we use send instead of emit
  socket.emit("messageFromServer", { data: "Welcome to the socketio server" });
  socket.on("messageFromClient", (dataFromClient) => {
    console.log(dataFromClient);
  });
});
