import Room from "../../init/room";
import IGame from "../../interface/IGame";
import User from "./user";

export default class Avalon implements IGame {
    name: string = 'Avalon';
    info: string = 'The Loyal Servants of Arthur are on a quest for the Holy Grail. However, the evil Minions of Mordred are amidst the good, and they wish to destroy their prize. They are well hidden, and are colluding in secret. Merlin knows where the Evil ones lie, but cannot reveal his knowledge for he will die if they learn his identity. Can the quest succeed despite the treachery afoot?';
    tags: Array<string> = ['deceit', 'deductions', 'teams'];
    playersInfo: string = '5-10';
    players: Array<User>;

    constructor() {
        this.players = new Array<User>();
    }

    getName(): string {
        return this.name;
    }

    getInfo(): string {
        return this.info;
    }

    getTags(): Array<string> {
        return this.tags;
    }

    getPlayersInfo(): string {
        return this.playersInfo;
    }

    addPlayer(username, socketid): Avalon {
        const user = new User(username, socketid);
        this.players.push(user);
        return this;
    }
}