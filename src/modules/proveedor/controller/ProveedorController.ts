import { Request, Response } from 'express';
import * as ProveedorOrm from '../domain/orm/Proveedor.orm';

export const getAllProveedores = async (req: Request, res: Response) => {
  try {
    // Si hay un 'id' en los query parameters, busca un proveedor específico
    if (req.query.id) {
      const proveedor = await ProveedorOrm.findProveedorById(req.query.id as string);
      if (!proveedor) {
        return res.status(404).json({ message: 'Proveedor not found' });
      }
      return res.json(proveedor);
    }

    // Si no, devuelve todos los proveedores
    const proveedores = await ProveedorOrm.findAllProveedores();
    res.json(proveedores);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createProveedor = async (req: Request, res: Response) => {
  try {
    const newProveedor = await ProveedorOrm.createProveedor(req.body);
    res.status(201).json(newProveedor);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProveedor = async (req: Request, res: Response) => {
  try {
    const updatedProveedor = await ProveedorOrm.updateProveedor(req.query.id as string, req.body);
    if (!updatedProveedor) {
      return res.status(404).json({ message: 'Proveedor not found' });
    }
    res.json(updatedProveedor);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProveedor = async (req: Request, res: Response) => {
  try {
    const proveedor = await ProveedorOrm.deleteProveedor(req.query.id as string);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor not found' });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
