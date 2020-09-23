import { injectable } from "tsyringe";
import mongoose from "../database";
import UserSI from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import BaseService from "./base.service"

@injectable()
export default class UserService extends BaseService<UserSI>{

    constructor(modelI?: UserModel){
        super(modelI)
    }

    getPostByUserId = async(userId: string) => {
        const user = await this.model.findOne({_id: mongoose.Types.ObjectId(userId)}).populate("posts") as UserSI
        if(user === null) throw new Error('No user found')
        console.log(user)
        return user.posts
    }

}