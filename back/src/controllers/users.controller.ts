import User, { IUser } from "../models/User";
import { Request, Response, NextFunction } from "express"

// GET

export const getUsers = async (req: Request, res: Response) => {
  // console.log(req.body)
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(`Something went wrong ${error}`);
  }
};

// GET 1

export const getUser = async (req: Request, res: Response, next: NextFunction) => {

  console.log(req.params)

  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json("Something went wrong")
  }
  
  next()
}

// UPDATE

// DELETE
