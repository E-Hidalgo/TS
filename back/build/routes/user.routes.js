"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("../controllers/users.controllers");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", users_controllers_1.getUser);
exports.userRouter.post("/", users_controllers_1.createUser);
//# sourceMappingURL=user.routes.js.map