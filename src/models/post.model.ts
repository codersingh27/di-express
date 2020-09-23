import { Schema, Model, model } from "mongoose";
import { singleton } from "tsyringe";
import ModelI from "../interfaces/model.interface";
import PostSI from "../interfaces/post.interface";

@singleton()
export default class PostModel implements ModelI{
    schema: Schema<any> = new Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    })
    model: Model<any, any> = model<PostSI>("posts", this.schema)
}