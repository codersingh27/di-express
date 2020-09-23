import { injectable, singleton } from "tsyringe";
import mongoose from "../database";
import ModelI from "../interfaces/mode.interface";
import UserSI from "../interfaces/user.interface";

@singleton()
@injectable()
export default class UserModel implements ModelI{
    schema: mongoose.Schema<any> = new mongoose.Schema({
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
                type: mongoose.Schema.Types.ObjectId,
                ref: "posts"
            }]
        }
    }, {
        timestamps: true
    })
    model: mongoose.Model<any, {}> = mongoose.model<UserSI>("users", this.schema)

}
