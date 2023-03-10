import User from "../games/avalon/user";

export default class Rooms {

    user: User;
    players: Array<User>;

    constructor() {
        this.players = new Array<User>();
    }

    addUser(username: string, socketid: string): User {
        const user = new User(username, socketid);
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
}