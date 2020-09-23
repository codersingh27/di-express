import { Schema, Model, model } from "mongoose";
import { singleton } from "tsyringe";
import AdminSI from "../interfaces/admin.interface";
import ModelI from "../interfaces/model.interface";

@singleton()
export default class AdminModel implements ModelI{
    schema: Schema<any> = new Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role:{
            type: String,
            enum: ['Super', 'Sub'],
            default: 'Super'
        }
    })
    model: Model<any, any> = model<AdminSI>("admins", this.schema)
}