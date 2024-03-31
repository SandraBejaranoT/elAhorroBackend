import { Document } from 'mongoose';

export interface IProveedor extends Document {
  nombre: string;
  address: string;
  telefono: string;
}
