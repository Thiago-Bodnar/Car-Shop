import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>) {
    const car = req.body;
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    const results = await this._service.readOne(id);

    return res.status(200).json(results);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    const data = req.body;

    const results = await this._service.update(id, data);

    return res.status(200).json(results);
  }
}