/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x === 'string') {
      this._name = x;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(x) {
    if (typeof x === 'number') {
      this._length = x;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(x) {
    if (Array.isArray(x) && !(x.find(e => { return typeof e !== 'string'}))) {
      this._students = x;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
