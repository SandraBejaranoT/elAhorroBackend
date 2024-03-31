import { Router } from 'express';
import * as ProductController from '../controller/ProductController';
import { verifyToken } from '../middlewares/verifyToken.middleware';

const productRouter = Router();

productRouter.get('/', verifyToken, ProductController.getAllProducts);
productRouter.post('/', verifyToken, ProductController.createProduct);
productRouter.put('/', verifyToken, ProductController.updateProduct);
productRouter.delete('/', verifyToken, ProductController.deleteProduct);

export default productRouter;
