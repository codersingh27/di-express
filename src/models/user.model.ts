import { Schema, Model, model } from "mongoose";
import { singleton } from "tsyringe";
import ModelI from "../interfaces/model.interface";
import UserSI from "../interfaces/user.interface";

@singleton()
export default class UserModel implements ModelI{
    schema: Schema<any> = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        posts: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: "posts"
            }]
        }
    }, {
        timestamps: true
    })
    model: Model<any, any> =  model<UserSI>("users", this.schema)

}