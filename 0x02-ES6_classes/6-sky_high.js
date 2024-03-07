import Building from './5-building';
/* eslint no-underscore-dangle: 0 */
/* eslint-disable-next-line no-unused-vars */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() { return this._floors; }

  set floors(f) {
    this._floors = f;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
