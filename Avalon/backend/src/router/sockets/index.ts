import games from "../../init/pack";

export const callback = (socket) => {
  socket.on("join", ({ username, roomid, gameName }, callback) => {
    const game = games[gameName];
    if (!game) return;

    const room = game.getRoom(roomid);
    const res = room.addUser(username, socket.id);

    if ("message" in res) {
      return callback(res.message);
    }

    const players = room.getPlayers();
    socket.join(roomid);
    socket.emit("message", players);
    socket.broadcast
      .to(roomid)
      .emit("message", `${res.username} has joined!`);
    callback();
  });

  socket.on("sendMessage", (message, callback) => {});

  socket.on("disconnect", () => {});
};
