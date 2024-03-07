/* eslint no-underscore-dangle: 0 */
/* eslint-disable-next-line no-unused-vars */
export default class Building {
  constructor(sqft) {
    if (this.constructor.name !== 'Building' && !this.evacuationWarningMessage) throw new Error('Class extending Building must override evacuationWarningMessage');
    this.sqft = sqft;
  }

  get sqft() { return this._sqft; }

  set sqft(s) {
    this._sqft = s;
  }
}
