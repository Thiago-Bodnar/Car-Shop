import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import MotorcycleModel from '../../../models/MotorcycleModel';
import { Model } from 'mongoose';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';
import { ErrorTypes } from '../../../errors/catalog';


describe('Motorcycle Model', () => {
  const motorcycleModel = new MotorcycleModel();

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(motorcycleMockWithId);
    sinon
      .stub(Model, 'findOne')
      .resolves(motorcycleMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('creating a motorcycle', () => {
    it('successfully created', async () => {
      const newMotorcycle = await motorcycleModel.create(motorcycleMock);
      expect(newMotorcycle).to.deep.equals(motorcycleMockWithId);
    })
  });

  describe('searching a motorcycle', () => {
    it('sucessfully found', async () => {
      const Motorcycle = await motorcycleModel.readOne("4edd40c86762e0fb12000003");
      expect(Motorcycle).to.deep.equals(motorcycleMockWithId);
    });

    it('_id not found', async () => {
      try {
        await motorcycleModel.readOne('wrong_id');
      } catch (error: any) {
        expect(error.message).to.be.equals(ErrorTypes.InvalidMongoId);
      }
    });
  });

});