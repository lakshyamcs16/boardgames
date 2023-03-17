import User from "../games/avalon/user";
import IError from "../interface/IError";
import { PLAYERS_LIMIT } from "../utilities/constants";
import { generateRandomArray, numberToRoleMapping } from "../utilities/utils";

export default class Rooms {
    players: Array<User>;

    constructor() {
        this.players = new Array<User>();
    }

    addUser(username: string, socketid: string, isMaster: boolean): User | IError {
        if(this.players.length >= 5) return {
            message: "5 players have already joined!"
        };

        const user = new User(username, socketid, isMaster);
        this.players = [...this.players, user];
        return user;
    }

    removeUser(socketid: string): Array<User> {
        this.players = this.players.filter(player => player.socketid !== socketid);
        return this.players;
    }

    getPlayers(): Array<User> {
        return this.players;
    }

    beginGame(): Array<any> {
        const roles = generateRandomArray(PLAYERS_LIMIT);
        const roleMappings = numberToRoleMapping(roles);
        return roleMappings;
    }
}