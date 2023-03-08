import express from "express";
import { Server } from "socket.io";
import http from "http";
import games from "../init/pack";
import { callback } from "./sockets";

const app = express();
const router = express.Router();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});

router.get("/games/:game", (req, res) => {
  const gameName = req.params.game;
  const game = games[gameName];
  const id = game.create();
  res.status(200).send({
    id,
  });
});

io.on("connection", (socket) => callback(socket));  
server.listen(3000, () => console.log("Socket connection @ 3000"));
export default router;
