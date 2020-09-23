import mongoose from "../database";
import { PostI } from "./post.interface";

export interface UserI{
    name: string
    email: string
    password?: string
    posts?: PostI[]
}

export default interface UserSI extends UserI, mongoose.Document{}