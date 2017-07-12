import { observable } from 'mobx';

class SortStore {

  @observable _sortIndex = 0;
  @observable _sortOrder = 'asc';

  /* Object to map sort functions */
  sortFunctions = {
    age: (data, sortCol) => (this.ageSort(data, sortCol)),
    date: (data, sortCol) => (this.basicSort(data, sortCol)),
    number: (data, sortCol) => (this.basicSort(data, sortCol)),
    string: (data, sortCol) => (this.basicSort(data, sortCol)),
  }

  basicSort = (data, sortCol) => {
    /* Basic sort handles string, numbers, and dates. */
    return data.sort((a, b) => {
      return this._sortOrder === 'asc'
      ? a[sortCol] < b[sortCol] ? -1 : 1
      : a[sortCol] < b[sortCol] ? 1 : -1;
    });
  }

  ageSort = (data, sortCol) => {
    /* first sort by month */
    let sortedByMonth = data.sort((a, b) => {
      return this._sortOrder === 'asc'
      ? a[sortCol].months < b[sortCol].months ? -1 : 1
      : a[sortCol].months < b[sortCol].months ? 1 : -1;
    });
    /* then sort by year */
    let sortedByYear = sortedByMonth.sort((a, b) => {
      return this._sortOrder === 'asc'
      ? a[sortCol].years < b[sortCol].years ? -1 : 1
      : a[sortCol].years < b[sortCol].years ? 1 : -1;
    });
    return sortedByYear;
  }

  resort = (order, index) => {
    /* reset observables that sort functions depend on */
    this._sortOrder = order;
    this._sortIndex = index;
  }

}

export default SortStore;
