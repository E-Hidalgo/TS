"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//? ASYNC AWAIT PROMISE PIM PAM
mongoose_1.default.connect("mongodb://localhost:27017/meweb", {})
    .then((db) => console.log(`DB connected`))
    .catch((err) => console.log(err));
//# sourceMappingURL=connect.js.map