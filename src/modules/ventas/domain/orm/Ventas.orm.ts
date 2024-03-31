import { IVenta } from '../interfaces/IVenta.interface';
import Venta from '../entities/Venta.entity';

export const findAllVentas = async (): Promise<IVenta[]> => {
  return await Venta.find().populate('ids_productos');
};

export const findVentaById = async (id: string): Promise<IVenta | null> => {
  return await Venta.findById(id).populate('ids_productos');
};

export const createVenta = async (ventaData: IVenta): Promise<IVenta> => {
  const venta = new Venta(ventaData);
  return await venta.save();
};

export const updateVenta = async (id: string, ventaData: Partial<IVenta>): Promise<IVenta | null> => {
  return await Venta.findByIdAndUpdate(id, ventaData, { new: true });
};

export const deleteVenta = async (id: string): Promise<IVenta | null> => {
  return await Venta.findByIdAndDelete(id);
};
