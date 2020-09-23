import { Router } from "express";
import UserController from "../../controllers/user.controller";

const userRouter = Router()
const userController = new UserController()

userRouter.get("/", userController.get)
userRouter.post("/", userController.post)
userRouter.get("/:id", userController.getById)
userRouter.delete("/:id", userController.delete)
userRouter.post("/post/:id", userController.createPost)
userRouter.get("/post/:id", userController.getPostById)

export default userRouter