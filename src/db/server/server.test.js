import server from './';
import Animal from '../animal';
import Promotion from '../promotion';

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

  it('gets a list of promotions', async () => {
    let promotions;
    await server.getPromotions().then((res) => {
      promotions = res.data;
    });
    promotions.forEach((promotion) => {
      expect(promotion).toBeInstanceOf(Promotion);
    });
  });
});
