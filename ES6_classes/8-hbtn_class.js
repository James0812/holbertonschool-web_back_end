export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Conversion en Number
  valueOf() {
    return this._size;
  }

  // Conversion en String
  toString() {
    return this._location;
  }
}
