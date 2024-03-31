import { Request, Response } from 'express';
import * as ProductOrm from '../domain/orm/Product.orm';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    // Si hay un 'id' en los query parameters, busca un producto específico
    if (req.query.id) {
      const product = await ProductOrm.findProductById(req.query.id as string);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.json(product);
    }

    // Si no, devuelve todos los productos
    const products = await ProductOrm.findAllProducts();
    res.json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await ProductOrm.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await ProductOrm.updateProduct(req.query.id as string, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductOrm.deleteProduct(req.query.id as string);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
