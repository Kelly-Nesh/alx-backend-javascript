/* eslint no-underscore-dangle: 0 */
/* eslint-disable-next-line no-unused-vars */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(s) {
    this._size = s;
  }

  get location() {
    return this._location;
  }

  set location(l) {
    this._location = l;
  }

  // eslint-disable-next-line consistent-return
  [Symbol.toPrimitive](cast) {
    if (cast === 'string') {
      return this.size;
    } if (cast === 'number') {
      return this.location;
    }
  }
}
