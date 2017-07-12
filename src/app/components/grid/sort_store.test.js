import { SortStore } from './sort_store';
import {
  DATA,
  COLMETA,
  DATA_SORTED_BY_NUMBER_ASC,
  DATA_SORTED_BY_STRING_ASC,
  DATA_SORTED_BY_DATE_ASC,
} from './sort_store_test_data.js';

let testSortstore = new SortStore();

describe('Sort Store functions', () => {

  beforeEach(() => {
    testSortstore._sortOrder = 'asc';
  });

  describe('String Sorting', () => {
    it('sorts strings in asc order by default', () => {
      testSortstore.basicSort(DATA, 'string');
      expect(DATA).toEqual(DATA_SORTED_BY_STRING_ASC);
    });

    it('can sort strings in dec order', () => {
      testSortstore._sortOrder = 'dec';
      testSortstore.basicSort(DATA, 'string');
      expect(DATA).toEqual(DATA_SORTED_BY_STRING_ASC.reverse());
    });
  });

  describe('Number Sorting', () => {
    it('sorts numbers in asc order by default', () => {
      testSortstore.basicSort(DATA, 'number');
      expect(DATA).toEqual(DATA_SORTED_BY_NUMBER_ASC);
    });

    it('can sort numbers in dec order', () => {
      testSortstore._sortOrder = 'dec';
      testSortstore.basicSort(DATA, 'number');
      expect(DATA).toEqual(DATA_SORTED_BY_NUMBER_ASC.reverse());
    });
  });

  describe('Date Sorting', () => {
    it('sorts dates in asc order by default', () => {
      testSortstore.basicSort(DATA, 'date');
      expect(DATA).toEqual(DATA_SORTED_BY_DATE_ASC);
    });

    it('can sort dates in dec order', () => {
      testSortstore._sortOrder = 'dec';
      testSortstore.basicSort(DATA, 'date');
      expect(DATA).toEqual(DATA_SORTED_BY_DATE_ASC.reverse());
    });
  });
});
