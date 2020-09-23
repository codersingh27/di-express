import { autoInjectable } from "tsyringe";
import AdminService from "../services/admin.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class AdminController extends BaseController{

    constructor(service?: AdminService){
        super(service)
    }
}