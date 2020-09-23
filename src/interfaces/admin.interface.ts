import mongoose from "../database"

export type AdminRoles = 'Super' | 'Sub'

export interface AdminI{
    username: string
    password: string
    role:AdminRoles
}

export default interface AdminSI extends AdminI, mongoose.Document{}