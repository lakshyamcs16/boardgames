"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
class Avalon {
    constructor() {
        this.name = 'Avalon';
        this.info = 'The Loyal Servants of Arthur are on a quest for the Holy Grail. However, the evil Minions of Mordred are amidst the good, and they wish to destroy their prize. They are well hidden, and are colluding in secret. Merlin knows where the Evil ones lie, but cannot reveal his knowledge for he will die if they learn his identity. Can the quest succeed despite the treachery afoot?';
        this.tags = ['deceit', 'deductions', 'teams'];
        this.playersInfo = '5-10';
    }
    getName() {
        return this.name;
    }
    getInfo() {
        return this.info;
    }
    getTags() {
        return this.tags;
    }
    getPlayersInfo() {
        return this.playersInfo;
    }
    addPlayer(username, socketid) {
        const user = new user_1.default(username, socketid);
        this.players.push(user);
        return this;
    }
}
exports.default = Avalon;
//# sourceMappingURL=avalon.js.map