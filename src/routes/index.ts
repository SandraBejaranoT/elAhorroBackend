import express, { Request, Response } from 'express';
import userRouter from '../modules/users/routes/UserRouter';
import authRouter from '../modules/users/routes/AuthRouter';
import productRouter from '../modules/products/routes/ProductRouter';
import ventasRouter from '../modules/ventas/routes/VentasRouter';
import proveedorRouter from '../modules/proveedor/routes/ProveedorRouter';

// Router Instance
const rootRouter = express.Router();

// * Root route
rootRouter.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the ElAhorro API');
});

// * Rutas específicas
rootRouter.use('/users', userRouter);
rootRouter.use('/auth', authRouter);
rootRouter.use('/productos', productRouter);
rootRouter.use('/ventas', ventasRouter);
rootRouter.use('/proveedores', proveedorRouter);


export default rootRouter;
