import games from "../../init/pack";
import { fetchRoom, notifyPlayers } from "./utils";

export const callback = (socket) => {
  socket.on("join", ({ username, roomid, gameName, isMaster }, callback) => {    
    const room = fetchRoom(games, gameName, roomid);
    console.log(room);
    
    const res = room.addUser(username, socket.id, isMaster);

    if ("message" in res) {
      return callback(res.message);
    }

   notifyPlayers(room, roomid, socket, callback);
  });

  socket.on("begin", ({ roomid, gameName }, callback) => {    
    const game = games[gameName];
    const playersInfo = game.begin(roomid);
    playersInfo.forEach(playerInfo => {
      socket.to(playerInfo.socketid).emit("begin", playerInfo);
    });
  });

  socket.on("disconnect", ({ roomid, gameName }, callback) => {
    const room = fetchRoom(games, gameName, roomid);
    if (!room) return;
    
    const res = room.removeUser(socket.id);

    if ("message" in res) {
      return callback(res.message);
    }

   notifyPlayers(room, roomid, socket, callback);
  });
};
