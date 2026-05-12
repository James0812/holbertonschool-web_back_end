import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._checkAmount(amount);
    this._checkCurrency(currency);

    this._amount = amount;
    this._currency = currency;
  }

  // GETTERS
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // SETTERS
  set amount(value) {
    this._checkAmount(value);
    this._amount = value;
  }

  set currency(value) {
    this._checkCurrency(value);
    this._currency = value;
  }

  // METHOD
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // STATIC METHOD
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // VALIDATIONS
  _checkAmount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
  }

  _checkCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }
}
