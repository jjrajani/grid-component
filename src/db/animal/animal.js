import calcAge from './animal.helpers';

export default class Animal {
  constructor(args) {
    this.name = args[0];
    this.species = args[1];
    this.dob = args[2];
    this.dod = args[3];
    this.age = calcAge(args[2], args[3]);
  }

}
