
import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carMockWithId);
    sinon
      .stub(Model, 'findOne')
      .resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.deep.equals(carMockWithId);
    })
  });

  describe('searching a car', () => {
    it('sucessfully found', async () => {
      const car = await carModel.readOne("4edd40c86762e0fb12000003");
      expect(car).to.deep.equals(carMockWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.readOne('wrong_id');
      } catch (error: any) {
        expect(error.message).to.be.equals('InvalidMongoId');
      }
    });
  });

});