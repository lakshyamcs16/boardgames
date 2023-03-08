import User from "../games/avalon/user";

export default interface IRoom {
    id: string;
    username: string;
    room: string;
    players: Array<User>;
}