import User from "../games/avalon/user";

export default class Game {
    user: User;

    addUser(username: string, socketid: string): User {
        const user = new User(username, socketid);
        return user;
    }

}