export default class HolbertonCourse {
  constructor(name, length, students) {
    this._checkName(name);
    this._checkLength(length);
    this._checkStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // GETTERS
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // SETTERS
  set name(value) {
    this._checkName(value);
    this._name = value;
  }

  set length(value) {
    this._checkLength(value);
    this._length = value;
  }

  set students(value) {
    this._checkStudents(value);
    this._students = value;
  }

  // VALIDATIONS
  _checkName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _checkLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  _checkStudents(value) {
    if (!Array.isArray(value) || !value.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
