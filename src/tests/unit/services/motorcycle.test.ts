import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotorcycleModel from '../../../models/MotorcycleModel';
import { Model } from 'mongoose';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';
import MotorcycleService from '../../../services/MotorcycleService';

describe('Motorcycle Service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  before(() => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleModel, 'readOne')
      .onCall(0).resolves(motorcycleMockWithId)
      .onCall(1).resolves(null);
  })
  after(() => {
    sinon.restore();
  })

  describe('Create motorcycle', () => {
    it('Sucess', async () => {
      const motorcycle = await motorcycleService.create(motorcycleMock);

      expect(motorcycle).to.deep.equals(motorcycleMockWithId);
    })
    it('Failure', async () => {
      let error;
      try {
        await motorcycleService.create({});

      } catch (err) {
        error = err;
      }
        expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('ReadOne motorcycle', () => {
    it('Sucess', async () => {
      const motorcycle = await motorcycleService.readOne(motorcycleMockWithId._id);

      expect(motorcycle).to.deep.equals(motorcycleMockWithId);
    });

    it('Failure', async () => {
      let error;
      try {
        await motorcycleService.readOne(motorcycleMockWithId._id);

      } catch (err: any) {
          error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.deep.equals(ErrorTypes.EntityNotFound);
    });
  });
});