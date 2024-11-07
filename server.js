// server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("New client connected");

  // Emit data every 2 seconds
  setInterval(() => {
    const newData = {
      time: new Date().toLocaleTimeString(),
      shortingRate: Math.random() * 10,
      maxRate: Math.random() * 10,
      minRate: Math.random() * 5,
      averageRate: Math.random() * 7
    };
    console.log("Emitting data:", newData);  // Verify data generation
    io.emit("shortingData", newData);  // Emit data to all connected clients
  }, 2000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
