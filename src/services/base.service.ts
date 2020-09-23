import mongoose from "../database";
import ModelI from "../interfaces/model.interface";


export default class BaseService<T>{

    model: mongoose.Model<any, any>
    constructor(modelI?: ModelI){
        this.model = modelI.model
    }

    post = async (data: T) => {
        const resource = await this.model.create(data)
        return resource
    }

    get = async (filters = {}): Promise<T[]> =>{
        const resource = await this.model.find(filters) as T[]
        return resource
    }

    getById = async (id: string): Promise<T> => {
        const resource = await this.model.findOne({_id: mongoose.Types.ObjectId(id)}) as T
        return resource
    }

    delete = (id: string): void => {
        return this.model.remove({_id: mongoose.Types.ObjectId(id)})
    }

}