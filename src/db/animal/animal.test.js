import Animal from './';

describe('Animal', () => {
  let animal;
  beforeEach(() => {
    animal = new Animal(['Jenna', 'human', new Date(1989, 0, 30), null]);
  });
  describe('Animal Properties', () => {
    it('Has a name, species, date of brith, date of death, and age', () => {
      expect(animal).hasOwnProperty('name');
      expect(animal).hasOwnProperty('species');
      expect(animal).hasOwnProperty('dob');
      expect(animal).hasOwnProperty('dod');
      expect(animal).hasOwnProperty('age');
    });

    it('inits takes an array of arguments and creates a new animal', () => {
      expect(animal.name).toBe('Jenna');
      expect(animal.species).toBe('human');
      expect(animal.dob).toEqual(new Date(1989, 0, 30));
      expect(animal.dod).toBe(null);
    });

    it('Date of death can handle the living', () => {
      animal = new Animal(['Jenna', 'human', new Date(1989, 0, 30), null]);
      expect(animal.dod).toBe(null);
      animal = new Animal(['Jenna', 'human', new Date(1989, 0, 30)]);
      expect(animal.dod).toBe(undefined);
    });
  });

  describe('Animal calculations', () => {
    it('Can calculate it`s living age', () => {

      var diff = new Date() - new Date(animal.dob); /* This is the difference in milliseconds */
      var age = Math.floor(diff/31557600000); /* Divide by 1000*60*60*24*365.25 */

      expect(animal.age.years).toBe(age);
    });
    it('Can calculate it`s deceased age', () => {
      animal.dod = new Date(2017, 3, 12);
      var diff = new Date(animal.dod) - new Date(animal.dob); /* This is the difference in milliseconds */
      var age = Math.floor(diff/31557600000); /* Divide by 1000*60*60*24*365.25 */

      expect(animal.age.years).toBe(age);
    });
  });

});
