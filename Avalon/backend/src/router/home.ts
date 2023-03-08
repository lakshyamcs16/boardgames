import express from "express";
import { Server } from "socket.io";
import http from "http";
import Room from "../init/room";
import games from "../init/pack";
import { makeid } from "../utilities/utils";

const app = express();
const router = express.Router();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});
let room = null;

router.get("/games/:game", (req, res) => {
  const gameName = req.params.game;

  const game = games[gameName];

  const id = makeid(4);
  room = new Room(game);
  room.create(id);
  res.status(200).send({
    id,
  });
});

io.on("connection", (socket) => {
  socket.on("join", ({ username, roomid }, callback) => {
    console.log("Joined: ", username);
    
    if (!room) return;
    const res = room.join(username, roomid, socket.id);

    if ("message" in res) {
      return callback(res.message);
    }

    socket.join(res.room);

    socket.emit("message", res);
    socket.broadcast
      .to(res.room)
      .emit("message", `${res.username} has joined!`);
    callback();
  });

  socket.on("sendMessage", (message, callback) => {});

  socket.on("disconnect", () => {});
});

server.listen(3000, () => console.log("Socket connection @ 3000"));
export default router;
