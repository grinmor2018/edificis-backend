import { Document } from 'mongoose';

 export interface Servicespeciality extends Document {
    readonly code: string;
    readonly name: string;
}