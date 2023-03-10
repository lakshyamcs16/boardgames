export const fetchRoom = (games, gameName, roomid) => {
    const game = games[gameName];
    if (!game) return;

    const room = game.getRoom(roomid);
    return room;
}

export const notifyPlayers = (room, roomid, socket, callback) => {
    const players = room.getPlayers();
    socket.join(roomid);
    socket.emit("message", players);
    socket.broadcast
      .to(roomid)
      .emit("message", players);
    callback();
}