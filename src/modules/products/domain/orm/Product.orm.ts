import { IProduct } from '../interfaces/IProduct.interface';
import Product from '../entities/Product.entity';

export const findAllProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};

export const findProductById = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id);
};

export const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const product = new Product(productData);
  return await product.save();
};

export const updateProduct = async (id: string, productData: Partial<IProduct>): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

export const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id);
};
