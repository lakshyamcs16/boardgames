export default class User {
    username: string;
    socketid: string;
    isMaster: boolean;

    constructor(username: string, socketid: string, isMaster = false) {
        this.username = username;
        this.socketid = socketid;
        this.isMaster = isMaster;
        return this;
    }
}