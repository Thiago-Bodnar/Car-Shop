import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carRoutes from './routes/carRoutes';
import motorcycleRoutes from './routes/motorcycleRoutes';

const app = express();

app.use(express.json());

app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);

app.use(errorHandler);

export default app;
