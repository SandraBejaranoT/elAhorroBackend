import { Schema, model } from 'mongoose';
import { IVenta } from '../interfaces/IVenta.interface';

// Definir el esquema de Ventas
const ventaSchema = new Schema<IVenta>({
  ids_productos: [{ 
    type: Schema.Types.ObjectId, // Usar ObjectId para referenciar otro documento
    ref: 'Product', // Este es el nombre del modelo al cual está referenciando
    required: true 
  }],
  fecha_venta: { type: String, required: true },
  total_venta: { type: Number, required: true },
});

// Crear y exportar el modelo Venta
const Venta = model<IVenta>('Venta', ventaSchema);

export default Venta;
