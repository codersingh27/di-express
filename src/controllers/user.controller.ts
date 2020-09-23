import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import PostSI from "../interfaces/post.interface";
import UserSI from "../interfaces/user.interface";
import PostService from "../services/post.service";
import UserService from "../services/user.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class UserController extends BaseController{

    postService: PostService
    service: UserService
    constructor(service?: UserService, postService?: PostService){
        super(service)
        this.service = service
        this.postService = postService
    }

    createPost = async (req: Request, res: Response) => {
        const userId = req.params.id
        const user = await this.service.getById(userId) as UserSI
        if(user === null){
            res.status(400).send({message: "No user found"})
            return
        }

        const post = await this.postService.post(req.body) as PostSI
        user.posts.push(post._id.toString())
        await user.save()
        res.send(post)
    }

    getPostById = async (req: Request, res: Response) => {
        const userId = req.params.id
        const post = await this.service.getPostByUserId(userId) 
        res.send(post)
    }

}