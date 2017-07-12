import Promotion from './';

describe('Promotion', () => {
  let promotion;
  beforeEach(() => {
    promotion = new Promotion(['8 Day Sale', 38, new Date(2017, 6, 11), 'Store Wide', 'FREE!!']);
  });
  describe('Promotion Properties', () => {
    it('Has a name, duration in days, event start date, department, and deal. In that order', () => {
      expect(promotion).hasOwnProperty('name');
      expect(promotion).hasOwnProperty('durationDays');
      expect(promotion).hasOwnProperty('eventStart');
      expect(promotion).hasOwnProperty('department');
      expect(promotion).hasOwnProperty('deal');
    });

    it('inits takes an array of arguments and creates a new promotion', () => {
      expect(promotion.name).toBe('8 Day Sale');
      expect(promotion.durationDays).toBe(38);
      expect(promotion.eventStart).toEqual(new Date(2017, 6, 11));
      expect(promotion.department).toBe('Store Wide');
      expect(promotion.deal).toBe('FREE!!');
    });
  });
  
});
