import { IProveedor } from '../interfaces/IProveedor.interface';
import Proveedor from '../entities/Proveedor.entity';

export const findAllProveedores = async (): Promise<IProveedor[]> => {
  return await Proveedor.find();
};

export const findProveedorById = async (id: string): Promise<IProveedor | null> => {
  return await Proveedor.findById(id);
};

export const createProveedor = async (proveedorData: IProveedor): Promise<IProveedor> => {
  const proveedor = new Proveedor(proveedorData);
  return await proveedor.save();
};

export const updateProveedor = async (id: string, proveedorData: Partial<IProveedor>): Promise<IProveedor | null> => {
  return await Proveedor.findByIdAndUpdate(id, proveedorData, { new: true });
};

export const deleteProveedor = async (id: string): Promise<IProveedor | null> => {
  return await Proveedor.findByIdAndDelete(id);
};
