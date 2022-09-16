import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import VehicleService from './VehicleService';

export default class CarService extends VehicleService<ICar> {
  constructor(protected _model: IModel<ICar>, protected _zodSchema = carZodSchema) {
    super(_model, _zodSchema);
  }
}