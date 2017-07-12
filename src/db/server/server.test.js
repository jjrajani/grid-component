import server from './';
import Animal from '../animal';

describe('Server functions', () => {
  it('gets a list of animals', async () => {
    let animals;
    await server.getAnimals().then((res) => {
      animals = res.data;
    });
    animals.forEach((animal) => {
      expect(animal).toBeInstanceOf(Animal);
    });
  });
});
