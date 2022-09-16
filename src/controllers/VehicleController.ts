import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';

export default abstract class VehicleController<T> {
  constructor(protected _service: IService<T>) { }
  public async create(req: Request, res: Response<T>) {
    const car = req.body;
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(_req: Request, res: Response<T[]>) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(req: Request, res: Response<T | null>) {
    const { id } = req.params;
    const results = await this._service.readOne(id);

    return res.status(200).json(results);
  }

  public async update(req: Request, res: Response<T | null>) {
    const { id } = req.params;
    const data = req.body;

    const results = await this._service.update(id, data);

    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response<T | null>) {
    const { id } = req.params;

    await this._service.delete(id);

    return res.sendStatus(204);
  }
}