export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // récupère le constructeur réel (Car ou classe qui étend Car)
    const Constructor = this.constructor;

    // crée une nouvelle instance de la même classe
    return new Constructor();
  }
}
