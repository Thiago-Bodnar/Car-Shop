import { z } from 'zod';
import { IVehicle, vehicleZodSchema } from './IVehicle';

export const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type CarSchema = z.infer<typeof carZodSchema>;

export type ICar = IVehicle & CarSchema;