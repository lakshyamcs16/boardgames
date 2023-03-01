"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = __importDefault(require("../components/Room"));
const makeid_1 = require("../helpers/makeid");
class Game {
    constructor() {
        this.rooms = new Map();
    }
    generateId() {
        let id = (0, makeid_1.makeid)(4);
        while (this.rooms.has(id)) {
            id = (0, makeid_1.makeid)(4);
        }
        this.rooms.set(id, new Room_1.default());
        return id;
    }
    join(id, name) {
        var _a, _b;
        console.log(name);
        if (!this.rooms.has(id))
            return `Could not add user ${name}, please try again`;
        (_a = this.rooms.get(id)) === null || _a === void 0 ? void 0 : _a.addPlayer(name);
        const names = ((_b = this.rooms.get(id)) === null || _b === void 0 ? void 0 : _b.getPlayers().map(player => player.getName()).join(", ")) || '';
        console.log(names);
        return names;
    }
}
exports.default = Game;
//# sourceMappingURL=start.js.map