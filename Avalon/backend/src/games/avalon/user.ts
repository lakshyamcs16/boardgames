export default class User {
    username: string;
    socketid: string;

    constructor(username: string, socketid: string) {
        this.username = username;
        this.socketid = socketid;
        return this;
    }
}