import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors"

const app: Application = express();

import authRoutes from "./routes/auth";
import userRoutes from "./routes/user"

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
