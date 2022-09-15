import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const motorcycleSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
    invalid_type_error: 'engineCapacity must be a number',
  }).int()    
    .positive()
    .lte(2500, { message: 'engineCapacity must be less than 2500' }),
});

type IMotorcycle = z.infer<typeof motorcycleSchema>;

export { motorcycleSchema, IMotorcycle };