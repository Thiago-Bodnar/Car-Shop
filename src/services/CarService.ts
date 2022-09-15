import { ErrorTypes } from '../errors/catalog';
import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._car = model;
  }
  read(): Promise<ICar[]> {
    const cars = this._car.read();
    return cars;
  }
  update(_id: string, obj: ICar): Promise<ICar | null> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    return this._car.update(_id, obj);
  }
  delete(_id: string): Promise<ICar | null> {
    return this._car.delete(_id);
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._car.create(parsed.data);
  }

  public async readOne(_id:string):Promise<ICar> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
}