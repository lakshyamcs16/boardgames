import Room from "../../init/room";
import IError from "../../interface/IError";
import IGame from "../../interface/IGame";
import IRoom from "../../interface/IRoom";
import { makeid } from "../../utilities/utils";

export default class Avalon implements IGame {
  name: string = "Avalon";
  info: string =
    "The Loyal Servants of Arthur are on a quest for the Holy Grail. However, the evil Minions of Mordred are amidst the good, and they wish to destroy their prize. They are well hidden, and are colluding in secret. Merlin knows where the Evil ones lie, but cannot reveal his knowledge for he will die if they learn his identity. Can the quest succeed despite the treachery afoot?";
  tags: Array<string> = ["deceit", "deductions", "teams"];
  playersInfo: string = "5-10";
  rooms: Map<string, Room>;

  constructor() {
    console.log("constructor called!");
    
    this.rooms = new Map<string, Room>();
    return this;
  }

  getName(): string {
    return this.name;
  }

  getInfo(): string {
    return this.info;
  }

  getTags(): Array<string> {
    return this.tags;
  }

  getPlayersInfo(): string {
    return this.playersInfo;
  }

  getRoom(id: string): Room {
    return this.rooms.get(id);
  }

  create(): string {
    const id = makeid(4);

    if (!this.rooms.has(id)) {
      this.rooms.set(id, new Room());
    }
    return id;
  }

  join(username: string, roomid: string, socketid): IError | IRoom {
    if (!this.rooms.has(roomid))
      return {
        message: "Room does not exist",
      };

    const room = this.rooms.get(roomid);
    const game = room.addUser(username, socketid);
    const players = room.getPlayers();

    return {
      id: socketid,
      username,
      room: roomid,
      players,
    };
  }
}
