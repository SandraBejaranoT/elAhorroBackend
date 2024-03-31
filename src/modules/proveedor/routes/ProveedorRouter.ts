import { Router } from 'express';
import * as ProveedorController from '../controller/ProveedorController';
import { verifyToken } from '../middlewares/verifyToken.middleware';

const proveedorRouter = Router();

proveedorRouter.get('/', verifyToken, ProveedorController.getAllProveedores);
proveedorRouter.post('/', verifyToken, ProveedorController.createProveedor);
proveedorRouter.put('/', verifyToken, ProveedorController.updateProveedor);
proveedorRouter.delete('/', verifyToken, ProveedorController.deleteProveedor);

export default proveedorRouter;
