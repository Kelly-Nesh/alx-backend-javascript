/* eslint no-underscore-dangle: 0 */
/* eslint-disable-next-line no-unused-vars */
import Currency from './3-currency';
/* eslint-disable-next-line no-unused-vars */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }

  set amount(a) {
    this._amount = a;
  }

  get currency() { return this._currency; }

  set currency(c) {
    this._currency = c;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
