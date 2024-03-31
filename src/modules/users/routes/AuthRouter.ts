// Importaciones necesarias para configurar las rutas de autenticación
import express from 'express';
import { login, otpSendCode, registerUser } from '../controller/AuthController'; // Importa las funciones del controlador de autenticación
// import { verifyToken } from '../middlewares/verifyToken.middleware'; // Middleware para verificar tokens (comentado si no se usa)

const authRouter = express.Router(); // Crea una instancia del router de Express para las rutas de autenticación

// Ruta para el inicio de sesión, que utiliza la función 'login' del controlador de autenticación
authRouter.post('/login', login);

// Ruta para el registro de nuevos usuarios, que utiliza la función 'registerUser' del controlador de autenticación
authRouter.post('/register',  registerUser);

// Ruta para el envio de otp por si el usuario olvida la clave
authRouter.post('/otp-generator', otpSendCode);

export default authRouter;
