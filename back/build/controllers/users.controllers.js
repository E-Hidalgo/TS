"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
// CREATE
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, company, email, phoneNumber } = req.body;
        const newUser = new User_1.default({
            name,
            lastName,
            company,
            email,
        });
        yield newUser.save();
        res.json("User Added");
    }
    catch (error) {
        res.json("Something went wrong!");
        console.log(error);
        next();
    }
});
exports.createUser = createUser;
// GET
const getUser = (req, res) => {
    try {
        const Users = User_1.default.find();
        res.json(Users);
    }
    catch (error) {
        res.json(`Something went wrong ${error}`);
    }
};
exports.getUser = getUser;
// GET 1
// UPDATE
// DELETE
//# sourceMappingURL=users.controllers.js.map