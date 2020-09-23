import { Router } from "express";
import adminRouter from "./admin.route";
import userRouter from "./user.route";

const userIndexRouter = Router()

userIndexRouter.use("/user", userRouter)
userIndexRouter.use("/admin", adminRouter)

export default userIndexRouter