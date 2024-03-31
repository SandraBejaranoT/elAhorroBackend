import { Request, Response } from 'express';
import * as UserOrm from '../domain/orm/Users.orm';

// ...

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Si hay un 'id' en los query parameters, busca un usuario específico
    if (req.query.id) {
      const user = await UserOrm.findUserById(req.query.id as string);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.json(user);
    }

    // Si no, devuelve todos los usuarios
    const users = await UserOrm.findAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ...

// Ahora puedes eliminar getUserById porque su lógica se ha movido a getAllUsers

// ...

export const updateUser = async (req: Request, res: Response) => {
  try {
    // Asegúrate de que 'id' esté presente como un query parameter.
    if (!req.query.id) {
      return res.status(400).json({ message: 'User ID is required as a query parameter' });
    }

    // Aquí cambiamos a 'req.query.id' para leer el ID del query string
    const updatedUser = await UserOrm.updateUser(req.query.id as string, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error: any) { // Especificar el tipo como 'Error'
    res.status(500).json({ message: error.message });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserOrm.deleteUser(req.query.id as string);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
