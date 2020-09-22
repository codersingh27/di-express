import { autoInjectable } from "tsyringe";
import UserSI from "../interfaces/user.interface";
import UserService from "../services/user.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class UserController extends BaseController{

    constructor(service?: UserService){
        super(service)
    }
}