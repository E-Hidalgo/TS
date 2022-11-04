import { Request, Response } from "express";
import User, { IUser } from "../models/User";

import jwt from "jsonwebtoken";

// SIGN UP
export const signup = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const user: IUser = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            company: req.body.company,
            email: req.body.email,
            password: req.body.password,
        });
        user.password = await user.encryptPassword(user.password);
        const savedUser = await user.save();

        // TOKEN CREATION
        const token: string = jwt.sign(
            { _id: savedUser._id },
            process.env.TOKEN_SECRET || "tokentest"
        );
        res.header("auth-token", token).json(savedUser);
    } catch (error) {
        console.log(error);
    }
};

//SIGN IN
export const signin = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json("Email or password wrong!");

        const correctPassword: Promise<boolean> = user.validatePassword(
            req.body.password
        );
        if (!correctPassword) return res.status(400).json("Invalid Password");

        // TOKEN VALIDATION
        const token: string = jwt.sign(
            { _id: user._id },
            process.env.TOKEN_SECRET || "tokentest",
            {
                expiresIn: 60 * 60 * 24,
            }
        );
        console.log(user)
        console.log(token)
        res.header("auth-token", token).send("logged in");
    } catch (error) {
        return console.log(error);
    }
};

// GET PROFILE
export const profile = async (req: Request, res: Response) => {
    console.log(req.userId)
    try {
        const user = await User.findById(req.userId);

        if (!user) return res.status(404).json("No user found");
        res.send(user);
    } catch (error) {
        return console.log(error);
    }
};

