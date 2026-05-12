export default class Building {
  constructor(sqft) {
    this._checkSqft(sqft);
    this._sqft = sqft;

    // Vérifie si la classe est étendue
    if (this.constructor !== Building) {
      // Vérifie si la méthode est implémentée
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // GETTER
  get sqft() {
    return this._sqft;
  }

  // VALIDATION
  _checkSqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
  }
}
