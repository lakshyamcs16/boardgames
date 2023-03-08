import IGame from "../interface/IGame";
import IRoom from "../interface/IRoom";
import IError from "../interface/IError";

export default class Rooms {
    rooms: Map<string, IGame>;
    game: IGame;

    constructor(game: IGame) {
        this.game = game;
        this.rooms = new Map<string, IGame>();
        return this;
    }

    getName() {
        return this.game.getName();
    }

    getInfo() {
        return this.game.getInfo();
    }

    getTags() {
        return this.game.getTags();
    }

    getPlayersInfo() {
        return this.game.getPlayersInfo();
    }

    create(roomid: string): Rooms {
        if(!this.rooms.has(roomid)) {
            this.rooms.set(roomid, this.game);
        }
        return this;
    }

    join(username: string, roomid: string, socketid): IError | IRoom {
        if(!this.rooms.has(roomid)) return {
            message: 'Room does not exist'
        };

        const game = this.game.addPlayer(username, socketid);
        const players = game.getPlayers();
        this.rooms.set(roomid, game);
        return {
            id: socketid,
            username,
            room: roomid,
            players
        };
    }
}