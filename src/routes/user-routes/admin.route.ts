import { Router } from "express";
import AdminController from "../../controllers/admin.controller";

const adminRouter = Router()
const adminController = new AdminController()

adminRouter.get("/", adminController.get)
adminRouter.post("/", adminController.post)
adminRouter.get("/:id", adminController.getById)
adminRouter.delete("/:id", adminController.delete)

export default adminRouter