const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // replace with your frontend url
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Run when client connects
io.on("connection", (socket) => {
  console.log("a user connected");

  //Welcome current user
  socket.emit("message", "Welcome to the chat!");

  //Brodcast when a user is connected
  socket.broadcast.emit("message", "A user has joined the chat");

  //Runs when a user left the chat
  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });

  //Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    io.emit("message", msg);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});
