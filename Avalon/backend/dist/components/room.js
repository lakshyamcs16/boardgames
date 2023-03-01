"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./player"));
class Room {
    constructor() {
        // Game board
        // Players
        this.players = new Array();
    }
    addPlayer(name) {
        const player = new player_1.default(name);
        this.players.push(player);
    }
    getPlayers() {
        return this.players;
    }
}
exports.default = Room;
//# sourceMappingURL=Room.js.map