/* eslint no-underscore-dangle: 0 */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(r) {
    this._range = r;
  }

  cloneCar() {
    return new super.constructor();
  }
}
