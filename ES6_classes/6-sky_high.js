import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // appel du constructeur parent
    this._floors = floors;
  }

  // GETTERS
  get floors() {
    return this._floors;
  }

  // Méthode obligatoire (override)
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
