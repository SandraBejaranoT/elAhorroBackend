import { Schema, model } from 'mongoose';
import { IProveedor } from '../interfaces/IProveedor.interface';

const proveedorSchema = new Schema<IProveedor>({
  nombre: { type: String, required: true },
  address: { type: String, required: true },
  telefono: { type: String, required: true },
});

const Proveedor = model<IProveedor>('Proveedores', proveedorSchema);

export default Proveedor;
