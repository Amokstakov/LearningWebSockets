import express from "express";
import socketIo from "socket.io";
import http from "http";

//Routes
import indexRoute from "./routes/index";

const PORT = process.env.PORT || 5001;
const app = express();

//initialize route
app.use(indexRoute);

const server = http.createServer(app);
const io = socketIo(server);

io.origins("*:*");

let interval;

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  socket.emit("From API", response);
};

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
