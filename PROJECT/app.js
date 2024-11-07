// public/app.js
const socket = io();

// Update rate values on data reception
socket.on("shortingData", (newData) => {
  console.log("Data received on client:", newData);  // Log data to verify reception

  // Update the UI with the received data
  document.getElementById("currentRate").textContent = newData.shortingRate.toFixed(2);
  document.getElementById("maxRate").textContent = newData.maxRate.toFixed(2);
  document.getElementById("minRate").textContent = newData.minRate.toFixed(2);
  document.getElementById("averageRate").textContent = newData.averageRate.toFixed(2);
});

// Handle connection and disconnection events
socket.on("connect", () => {
  document.getElementById("status").textContent = "Connected";
  document.getElementById("status").classList.remove("disconnected");
});

socket.on("connect_error", () => {
  document.getElementById("status").textContent = "Connection lost. Trying to reconnect...";
  document.getElementById("status").classList.add("disconnected");
});
