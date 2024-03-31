import { Router } from 'express';
import * as VentasController from '../controller/VentasController';
import { verifyToken } from '../middlewares/verifyToken.middleware';

const ventasRouter = Router();

// Obtener todas las ventas o una venta específica por ID
ventasRouter.get('/', verifyToken, VentasController.getAllVentas);

// Crear una nueva venta
ventasRouter.post('/', verifyToken, VentasController.createVenta);

// Actualizar una venta por ID
ventasRouter.put('/', verifyToken, VentasController.updateVenta);

// Eliminar una venta por ID
ventasRouter.delete('/', verifyToken, VentasController.deleteVenta);

export default ventasRouter;
