"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rooms {
    constructor(game) {
        this.game = game;
        this.rooms = new Map();
        return this;
    }
    getName() {
        return this.game.getName();
    }
    getInfo() {
        return this.game.getInfo();
    }
    getTags() {
        return this.game.getTags();
    }
    getPlayersInfo() {
        return this.game.getPlayersInfo();
    }
    create(roomid) {
        if (!this.rooms.has(roomid)) {
            this.rooms.set(roomid, this.game);
        }
        return this;
    }
    join(username, roomid, socketid) {
        if (!this.rooms.has(roomid))
            return {
                message: 'Room does not exist'
            };
        this.rooms.set(roomid, this.game.addPlayer(username, socketid));
        return {
            id: socketid,
            username,
            room: roomid
        };
    }
}
exports.default = Rooms;
//# sourceMappingURL=room.js.map