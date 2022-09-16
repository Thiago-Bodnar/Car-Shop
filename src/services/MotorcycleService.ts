import { IModel } from '../interfaces/IModel';
import { IMotorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';
import VehicleService from './VehicleService';

export default class MotorcycleService extends VehicleService<IMotorcycle> {
  constructor(protected _model: IModel<IMotorcycle>, protected _zodSchema = motorcycleZodSchema) {
    super(_model, _zodSchema);
  }
}