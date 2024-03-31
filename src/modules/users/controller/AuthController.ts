
import { Request, Response } from 'express';
import * as AuthOrm from '../domain/orm/Auth.orm'; // Importamos las funciones ORM de autenticación
import nodemailer from 'nodemailer'; // Importamos nodemailer para posibles funcionalidades de envío de correos

// Función para manejar el inicio de sesión
export const login = async (req: Request, res: Response) => {
  try {
    // Intenta obtener un token usando las credenciales proporcionadas en el cuerpo de la solicitud
    const token = await AuthOrm.logIn(req.body);
    if (!token) {
      // Si no se obtiene un token, la autenticación ha fallado
      return res.status(401).json({ message: 'Authentication failed' });
    }
    // Si la autenticación es exitosa, responde con el token y un mensaje de éxito
    res.json({
      message: 'Login successful',
      token: token
    });
  } catch (error: any) {
    // Manejo de errores del servidor
    res.status(500).json({ message: error.message });
  }
};

// Función para manejar el registro de nuevos usuarios
export const registerUser = async (req: Request, res: Response) => {
  try {
    // Intenta registrar un nuevo usuario con los datos proporcionados
    const newUser = await AuthOrm.registerUser(req.body);
    // Si el registro es exitoso, devuelve el nuevo usuario con un estado 201 (Creado)
    res.status(201).json(newUser);
  } catch (error: any) {
    // Manejo de errores del servidor
    res.status(500).json({ message: error.message });
  }
};

export const otpSendCode = async (req: Request, res: Response) => {
  try {
    // Buscar usuario por email
    const user = await AuthOrm.findUserByEmail(req.body.email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generar OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Genera un código de 6 dígitos

    // Configurar el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ejemplo con Gmail; usar la configuración adecuada para tu proveedor
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar opciones de correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    };

    // email address: emailserviceautomatic@gmail.com
    // password: AutomaticEmailService123


    // Enviar correo electrónico
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP sent to email', otp: otp })

  } catch (error: any) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: error.message });
  }
};