import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on("connection", (Socket) => {
  console.log("new connection created");

  Socket.on("message", (msg) => {
    console.log("user fire message");
    console.log(msg);
  });
});

httpServer.listen(3000, () => {
  console.log("server running on port 3000");
});
