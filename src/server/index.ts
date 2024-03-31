import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rootRouter from '../routes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

// Configuración de la conexión a MongoDB
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

// const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
const mongoURI = `mongodb+srv://sandrabejaranotorres:ahorroapp123@elahorroapp.kvvd5ni.mongodb.net/`;


mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usamos el rootRouter para todas las rutas de la API
app.use('/api', rootRouter); 

// Iniciar el servidor Express
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} WELCOME TO EL AHORRO API`);
});