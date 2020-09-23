import { injectable } from "tsyringe";
import AdminSI from "../interfaces/admin.interface";
import AdminModel from "../models/admin.model";
import BaseService from "./base.service";

@injectable()
export default class AdminService extends BaseService<AdminSI>{

    constructor(modelI?: AdminModel){
        super(modelI)
    }

}