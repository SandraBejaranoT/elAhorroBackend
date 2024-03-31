import { Schema, model } from 'mongoose';
import { IProduct } from '../interfaces/IProduct.interface';

const productSchema = new Schema<IProduct>({
  id_proveedor: { 
    type: Schema.Types.ObjectId, 
    ref: 'Proveedores', // Esta referencia debe coincidir con el nombre dado al modelo de Proveedor
    required: true 
  },
  description: { type: String, required: true },
  reference: { type: String, required: true },
  category: { type: String, required: true },
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
