import { Request, Response } from "express";
import BaseService from "../services/base.service";


export default class BaseController{

    service: BaseService<any>
    constructor(service: BaseService<any>){
        this.service = service
    }

    post = async(req: Request, res: Response) => {
        const resource = await this.service.post(req.body)
        res.send(resource)
    }

    get = async(req: Request, res: Response) => {
        const resource = await this.service.get()
        res.send(resource)
    }

    getById = async (req: Request, res: Response) => {
        const { id } = req.params
        const resource = await this.service.getById(id)
        if(resource === null){
            res.status(400).send({message: "No data found"})
            return
        }
        res.send(resource)
    }

    delete = async (req: Request, res: Response) => {
        const { id } = req.params
        const resource = await this.service.delete(id)
        res.send(resource)
    }

} 