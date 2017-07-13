import SortStore from './sort_store';
import {
  DATA,
  COLMETA,
  DATA_SORTED_BY_NUMBER_ASC,
  DATA_SORTED_BY_STRING_ASC,
  DATA_SORTED_BY_DATE_ASC,
  DATA_SORTED_BY_AGE_ASC,
} from './sort_store_test_data.js';

let testSortStore = new SortStore();

describe('Sort Store functions', () => {

  beforeEach(() => {
    testSortStore._sortOrder = 'asc';
  });

  describe('String Sorting', () => {
    it('sorts strings in asc order by default', () => {
      testSortStore.basicSort(DATA, 'string');
      expect(DATA).toEqual(DATA_SORTED_BY_STRING_ASC);
    });

    it('can sort strings in dec order', () => {
      testSortStore._sortOrder = 'dec';
      testSortStore.basicSort(DATA, 'string');
      expect(DATA).toEqual(DATA_SORTED_BY_STRING_ASC.reverse());
    });
  });

  describe('Number Sorting', () => {
    it('sorts numbers in asc order by default', () => {
      testSortStore.basicSort(DATA, 'number');
      expect(DATA).toEqual(DATA_SORTED_BY_NUMBER_ASC);
    });

    it('can sort numbers in dec order', () => {
      testSortStore._sortOrder = 'dec';
      testSortStore.basicSort(DATA, 'number');
      expect(DATA).toEqual(DATA_SORTED_BY_NUMBER_ASC.reverse());
    });
  });

  describe('Date Sorting', () => {
    it('sorts dates in asc order by default', () => {
      testSortStore.basicSort(DATA, 'date');
      expect(DATA).toEqual(DATA_SORTED_BY_DATE_ASC);
    });

    it('can sort dates in dec order', () => {
      testSortStore._sortOrder = 'dec';
      testSortStore.basicSort(DATA, 'date');
      expect(DATA).toEqual(DATA_SORTED_BY_DATE_ASC.reverse());
    });
  });

  /*
  Example Age Object
  age: { years: 31, months: 2 }
  */

  describe('Age Object sorting', () => {
    it('can sorts age objects in asc order by default', () => {
      testSortStore.ageSort(DATA, 'age');
      expect(DATA).toEqual(DATA_SORTED_BY_AGE_ASC);
    });

    it('can sorts age objects in dev order', () => {
      testSortStore._sortOrder = 'dec';
      testSortStore.ageSort(DATA, 'age');
      expect(DATA).toEqual(DATA_SORTED_BY_AGE_ASC.reverse());
    });
  });
});
