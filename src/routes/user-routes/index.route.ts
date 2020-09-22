import { Router } from "express";
import userRouter from "./user.routes";


const userIndexRouter = Router()

userIndexRouter.use("/user", userRouter)

export default userIndexRouter