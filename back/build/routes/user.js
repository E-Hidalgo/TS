"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
// import { profile } from "../controllers/auth.controller";
const router = (0, express_1.Router)();
router.get("/", users_controller_1.getUsers);
// router.get("/profile", profile)
exports.default = router;
//# sourceMappingURL=user.js.map