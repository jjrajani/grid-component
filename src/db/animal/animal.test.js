import Animal from './';

describe('Animal', () => {
  let animal;
  beforeEach(() => {
    animal = new Animal(['Jenna', 'Human', new Date(1989, 0, 30), "Still Living"]);
  });
  describe('Animal Properties', () => {
    it('Has a name, species, date of brith, date of death, and age', () => {
      expect(animal).hasOwnProperty('name');
      expect(animal).hasOwnProperty('species');
      expect(animal).hasOwnProperty('dob');
      expect(animal).hasOwnProperty('dod');
      expect(animal).hasOwnProperty('age');
    });

    it('inits takes an array of arguments in the order of name, species, date of birth, date of death and creates a new animal', () => {
      expect(animal.name).toBe('Jenna');
      expect(animal.species).toBe('Human');
      expect(animal.dob).toEqual(new Date(1989, 0, 30));
      expect(animal.dod).toBe("Still Living");
    });

    it('Date of death can handle the living (null, undefined, or string DOD)', () => {
      animal = new Animal(['Jenna', 'human', new Date(1989, 0, 30), null]);
      expect(animal.dod).toBe(null);
      animal = new Animal(['Jenna', 'human', new Date(1989, 0, 30)]);
      expect(animal.dod).toBe(undefined);
      animal = new Animal(['Jenna', 'human', new Date(1989, 0, 30), 'Still Living']);
      expect(animal.dod).toBe('Still Living');
    });
  });

  describe('Animal calculations', () => {
    it('Can calculate it`s living age when DOD is a string', () => {
      expect(animal.age.years).toBe(28);
      expect(animal.age.months).toBe(5);
    });

    it('Can calculate it`s living age when DOD is null', () => {
      animal = new Animal(['Jenna', 'Human', new Date(1989, 0, 30), null]);

      expect(animal.age.years).toBe(28);
      expect(animal.age.months).toBe(5);
    });

    it('Can calculate it`s living age when DOD is undefined', () => {
      animal = new Animal(['Jenna', 'Human', new Date(1989, 0, 30), undefined]);

      expect(animal.age.years).toBe(28);
      expect(animal.age.months).toBe(5);
    });

    it('Can calculate it`s deceased age', () => {
      animal = new Animal(['Callie', 'Cat', new Date(1991, 3, 1), new Date(2000, 6, 10) ]),

      expect(animal.age.years).toBe(9);
      expect(animal.age.months).toBe(3);
    });
  });

});
