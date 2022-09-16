import { ZodSchema } from 'zod';
import { ErrorTypes } from '../errors/catalog';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

abstract class VehicleService<T extends ICar | IMotorcycle> implements IService<T> {
  constructor(protected _model: IModel<T>, protected _zodSchema: ZodSchema<T>) { }

  public async read(): Promise<T[]> {
    const vehicles = await this._model.read();
    return vehicles;
  }
  public async update(_id: string, payload: unknown): 
  Promise<T & { _id: string; }> {
    const parsed = this._zodSchema.safeParse(payload);
    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._model.update(_id, parsed.data);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated as T & { _id: string };
  }
  public async delete(_id: string): Promise<T | null> {
    const vehicle = await this._model.delete(_id);
    if (!vehicle) throw new Error(ErrorTypes.EntityNotFound);
    return vehicle;
  }
  public async create(obj:unknown): Promise<T & { _id: string }> {
    const parsed = this._zodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }

    const created = await this._model.create(parsed.data);

    return created as T & { _id: string };
  }

  public async readOne(_id:string):Promise<T | null> {
    const vehicle = await this._model.readOne(_id);
    if (!vehicle) throw new Error(ErrorTypes.EntityNotFound);
    return vehicle;
  }
}

export default VehicleService;