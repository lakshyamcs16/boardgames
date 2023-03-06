"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../games/avalon/user"));
class Game {
    addUser(username, socketid) {
        const user = new user_1.default(username, socketid);
        return user;
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map