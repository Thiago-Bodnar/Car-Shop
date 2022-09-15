import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
  })
  after(() => {
    sinon.restore();
  })

  describe('Create Car', () => {
    it('Sucess', async () => {
      const car = await carService.create(carMock);

      expect(car).to.deep.equals(carMockWithId);
    })
    it('Failure', async () => {
      let error;
      try {
        await carService.create({});

      } catch (err) {
        error = err;
      }
        expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('ReadOne Car', () => {
    it('Sucess', async () => {
      const car = await carService.readOne(carMockWithId._id);

      expect(car).to.deep.equals(carMockWithId);
    });

    it('Failure', async () => {
      let error;
      try {
        await carService.readOne(carMockWithId._id);

      } catch (err: any) {
          error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.deep.equals(ErrorTypes.EntityNotFound);
    });
  });
});