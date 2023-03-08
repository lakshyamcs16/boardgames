
export default interface IGame {
    getName: () => string;
    getInfo: () => string;
    getTags: () => Array<string>;
    getPlayersInfo: () => string;
}