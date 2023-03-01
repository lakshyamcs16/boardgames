"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeid = void 0;
function makeid(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
exports.makeid = makeid;
//# sourceMappingURL=makeid.js.map