import { Document } from 'mongoose';

export interface IVenta extends Document {
  ids_productos: string[]; // Array de IDs de los productos vendidos
  fecha_venta: string;     // Fecha en la que se realizó la venta
  total_venta: number;     // Monto total de la venta
}
