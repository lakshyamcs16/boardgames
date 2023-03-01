import express from "express";
import { Server } from "socket.io";
import http from "http";
import Room from "../init/room";
import games from "../init/pack";
import { makeid } from "../utilities/utils";

const app = express();
const router = express.Router();
const server = http.createServer(app);
const io = new Server(server);
let room = null;

router.get("/games/:game", (req, res) => {
  const gameName = req.params.game;
  
  const game = games[gameName];
  
  const id = makeid(4);
  room = new Room(game);
  room.create(id);
  res.status(200).send({
    id
  });
});

io.on("connection", (socket) => {
  socket.on("join", ({ username, roomid }, callback) => {
    const res = room.join(username, roomid, socket.id);

    if ("message" in res) {
      return callback(res.message);
    }

    socket.join(res.room);

    socket.emit("message", "Hey");
    socket.broadcast
      .to(res.room)
      .emit("message", `${res.username} has joined!`);
    io.to(res.room).emit("gameData", {});
    callback();
  });

  socket.on("sendMessage", (message, callback) => {});

  socket.on("disconnect", () => {});
});

export default router;