import { PLAYERS_LIMIT } from "../../utilities/constants";

export const fetchRoom = (games, gameName, roomid) => {
    const game = games[gameName];
    if (!game) return;

    const room = game.getRoom(roomid);
    return room;
}

export const notifyPlayers = (room, roomid, socket, callback) => {
    const players = room.getPlayers();
    const objToReturn = {
      players: players,
      toBegin: false
    };

    if(players.length === PLAYERS_LIMIT) objToReturn.toBegin = true;

    socket.join(roomid);
    socket.emit("message", objToReturn);
    socket.broadcast
      .to(roomid)
      .emit("message", objToReturn);
    callback();
}