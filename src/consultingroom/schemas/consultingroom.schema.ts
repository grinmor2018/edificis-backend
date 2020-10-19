import { Schema } from 'mongoose';

export const ConsultingroomSchema = new Schema ({
    code: String,
    name: String,
    createdAt: { type: Date, default: Date.now }
})