// UserRouter.ts
import { Router } from 'express';
import * as UsersController from '../controller/UsersController';
import { verifyToken } from '../middlewares/verifyToken.middleware'; // Asegúrate de que la ruta sea correcta

const userRouter = Router();

// Aplicamos el middleware 'verifyToken' a todas las rutas que necesitan protección
// GET /: Obtener todos los usuarios o Obtener un usuario por ID
userRouter.get('/', verifyToken, UsersController.getAllUsers);


// PUT /:id: Actualizar un usuario por ID
userRouter.put('/', verifyToken, UsersController.updateUser);

// DELETE /:id: Eliminar un usuario por ID
userRouter.delete('/', verifyToken, UsersController.deleteUser);

export default userRouter;
