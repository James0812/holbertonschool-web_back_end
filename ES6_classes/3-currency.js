export default class Currency {
  constructor(code, name) {
    this._checkCode(code);
    this._checkName(name);

    this._code = code;
    this._name = name;
  }

  // GETTERS
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // SETTERS
  set code(value) {
    this._checkCode(value);
    this._code = value;
  }

  set name(value) {
    this._checkName(value);
    this._name = value;
  }

  // METHOD
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // VALIDATIONS
  _checkCode(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  _checkName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }
}
