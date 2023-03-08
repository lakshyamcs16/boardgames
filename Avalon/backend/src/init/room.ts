import User from "../games/avalon/user";

export default class Rooms {

    user: User;
    players: Array<User>;

    constructor() {
        this.players = new Array<User>();
    }

    addUser(username: string, socketid: string): User {
        const user = new User(username, socketid);
        this.players.push(user);
        return user;
    }

    getPlayers(): Array<User> {
        return this.players;
    }
}