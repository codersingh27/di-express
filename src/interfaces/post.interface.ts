import mongoose from "../database";

export interface PostI{
    title: string
    description: string
}

export default interface PostSI extends PostI, mongoose.Document{}