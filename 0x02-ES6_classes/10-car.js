/* eslint no-underscore-dangle: 0 */
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this.brand;
  }

  set brand(b) {
    this._brand = b;
  }

  get motor() {
    return this.motor;
  }

  set motor(m) {
    this._motor = m;
  }

  get color() {
    return this.color;
  }

  set color(c) {
    this._color = c;
  }

  cloneCar() {
    return new this.constructor();
  }
}
