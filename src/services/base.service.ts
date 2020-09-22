import { mongo } from "mongoose";
import { autoInjectable } from "tsyringe";
import mongoose from "../database";
import ModelI from "../interfaces/mode.interface";

export default class BaseService<T>{

    model: mongoose.Model<any, any>
    constructor(model: ModelI){
        this.model = model.model
    }

    async post(data: T){
        const resourse = await this.model.create(data)
        return resourse
    }

    async get(filters = {}): Promise<T[]>{
        const resource = await this.model.find(filters) as T[]
        return resource
    }

    async getById(id: string): Promise<T>{
        const resource = await this.model.findOne({_id: mongoose.Types.ObjectId(id)}) as T
        return resource
    }

    delete = (id: string): void => {
        return this.model.remove({_id: mongoose.Types.ObjectId(id)})
    }

}