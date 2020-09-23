
import PostSI from "../interfaces/post.interface";
import BaseService from "./base.service"
import PostModel from '../models/post.model'
import { injectable } from "tsyringe";

@injectable()
export default class PostService extends BaseService<PostSI>{

    constructor(modelI?: PostModel){
        super(modelI)
    }

}