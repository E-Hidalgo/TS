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
exports.profile = exports.signin = exports.signup = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// SIGN UP
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const user = new User_1.default({
            name: req.body.name,
            lastName: req.body.lastName,
            company: req.body.company,
            email: req.body.email,
            password: req.body.password,
        });
        user.password = yield user.encryptPassword(user.password);
        const savedUser = yield user.save();
        // TOKEN CREATION
        const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || "tokentest");
        res.header("auth-token", token).json(savedUser);
    }
    catch (error) {
        console.log(error);
    }
});
exports.signup = signup;
//SIGN IN
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).json("Email or password wrong!");
        const correctPassword = user.validatePassword(req.body.password);
        if (!correctPassword)
            return res.status(400).json("Invalid Password");
        // TOKEN VALIDATION
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || "tokentest", {
            expiresIn: 60 * 60 * 24,
        });
        console.log(user);
        console.log(token);
        res.header("auth-token", token).send("logged in");
    }
    catch (error) {
        return console.log(error);
    }
});
exports.signin = signin;
// GET PROFILE
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.userId);
    try {
        const user = yield User_1.default.findById(req.userId);
        if (!user)
            return res.status(404).json("No user found");
        res.send(user);
    }
    catch (error) {
        return console.log(error);
    }
});
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map