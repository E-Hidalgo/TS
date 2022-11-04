import  { Router } from "express";
import { getUser, getUsers } from "../controllers/users.controller";
// import { profile } from "../controllers/auth.controller";

const router: Router = Router()

router.get("/", getUsers)
// router.get("/profile", profile)


export default router


