"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const room_1 = __importDefault(require("../init/room"));
const pack_1 = __importDefault(require("../init/pack"));
const utils_1 = require("../utilities/utils");
const app = (0, express_1.default)();
const router = express_1.default.Router();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
let room = null;
router.get("/games/:game", (req, res) => {
    const gameName = req.params.game;
    const game = pack_1.default[gameName];
    const id = (0, utils_1.makeid)(4);
    room = new room_1.default(game);
    room.create(id);
    res.status(200).send({
        id
    });
});
io.on("connection", (socket) => {
    socket.on("join", ({ username, roomid }, callback) => {
        const res = room.join(username, roomid, socket.id);
        if ("message" in res) {
            return callback(res.message);
        }
        socket.join(res.room);
        socket.emit("message", "Hey");
        socket.broadcast
            .to(res.room)
            .emit("message", `${res.username} has joined!`);
        io.to(res.room).emit("gameData", {});
        callback();
    });
    socket.on("sendMessage", (message, callback) => { });
    socket.on("disconnect", () => { });
});
exports.default = router;
//# sourceMappingURL=home.js.map