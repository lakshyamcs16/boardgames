import games from "../../init/pack";
import { fetchRoom, notifyPlayers } from "./utils";

export const callback = (socket) => {
  socket.on("join", ({ username, roomid, gameName }, callback) => {
    const room = fetchRoom(games, gameName, roomid);
    const res = room.addUser(username, socket.id);

    if ("message" in res) {
      return callback(res.message);
    }

   notifyPlayers(room, roomid, socket, callback);
  });

  socket.on("sendMessage", (message, callback) => {});

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
