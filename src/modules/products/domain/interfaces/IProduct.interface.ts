import { Document, ObjectId } from 'mongoose';

export interface IProduct extends Document {
  id_proveedor: ObjectId;
  description: string;
  reference: string;
  category: string;
}
