import { ErrorTypes } from '../errors/catalog';
import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._car = model;
  }
  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();
    return cars;
  }
  public async update(_id: string, payload: unknown): 
  Promise<ICar & { _id: string; }> {
    const parsed = carZodSchema.safeParse(payload);
    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._car.update(_id, parsed.data);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated as ICar & { _id: string };
  }
  public async delete(_id: string): Promise<ICar | null> {
    const car = await this._car.delete(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
  public async create(obj:unknown): Promise<ICar & { _id: string }> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }

    const created = await this._car.create(parsed.data);

    return created as ICar & { _id: string };
  }

  public async readOne(_id:string):Promise<ICar | null> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
}