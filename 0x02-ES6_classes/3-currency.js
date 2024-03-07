/* eslint no-underscore-dangle: 0 */
/* eslint-disable-next-line no-unused-vars */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() { return this._name; }

  set name(n) {
    this._name = n;
  }

  get code() { return this._code; }

  set code(c) {
    this._code = c;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
