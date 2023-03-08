import User from "../games/avalon/user";

export default interface IGame {
    getName: () => string;
    getInfo: () => string;
    getTags: () => Array<string>;
    getPlayersInfo: () => string;
    addPlayer: (username: string, socketid: string) => IGame;
    getPlayers: () => Array<User>;
}