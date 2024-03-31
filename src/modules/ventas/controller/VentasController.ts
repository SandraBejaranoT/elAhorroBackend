import { Request, Response } from 'express';
import * as VentasOrm from '../domain/orm/Ventas.orm';

export const getAllVentas = async (req: Request, res: Response) => {
  try {
    // Si hay un 'id' en los query parameters, busca una venta específica
    if (req.query.id) {
      const venta = await VentasOrm.findVentaById(req.query.id as string);
      if (!venta) {
        return res.status(404).json({ message: 'Venta not found' });
      }
      return res.json(venta);
    }

    // Si no, devuelve todas las ventas
    const ventas = await VentasOrm.findAllVentas();
    res.json(ventas);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createVenta = async (req: Request, res: Response) => {
  try {
    const newVenta = await VentasOrm.createVenta(req.body);
    res.status(201).json(newVenta);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateVenta = async (req: Request, res: Response) => {
  try {
    const updatedVenta = await VentasOrm.updateVenta(req.query.id as string, req.body);
    if (!updatedVenta) {
      return res.status(404).json({ message: 'Venta not found' });
    }
    res.json(updatedVenta);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteVenta = async (req: Request, res: Response) => {
  try {
    const venta = await VentasOrm.deleteVenta(req.query.id as string);
    if (!venta) {
      return res.status(404).json({ message: 'Venta not found' });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
