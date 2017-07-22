import { observable } from 'mobx';

class SortStore {
  /* _sortColumn used to find which colMeta[index] to sort by */
  @observable _sortColumn = 0;
  @observable _sortOrder = 'asc';

  /* Object look up for sort functions. Used on line 22 */
  sortFunctions = {
    age: (data, sortCol) => (this.ageSort(data, sortCol)),
    date: (data, sortCol) => (this.basicSort(data, sortCol)),
    number: (data, sortCol) => (this.basicSort(data, sortCol)),
    string: (data, sortCol) => (this.basicSort(data, sortCol)),
  }

  sort = (data, colMeta) => {
    /* get sort type from colMeta */
    let sortType = colMeta[this._sortColumn].sortType;
    /* get data accessor from colMeta */
    let sortCol = colMeta[this._sortColumn].dataAcsr;
    /* sort dataAcsr column with corresponding sortType function */
    return this.sortFunctions[sortType](data, sortCol);
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
    /* handles sorting of age object. Ex) age: {years: 23, months: 2} */
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

    /* less code but less readable */
    // let sortOrder = this._sortOrder === 'asc' ? -1 : 1;
    //
    // return data.sort(
    //   (a, b) => ((a[sortCol].months - b[sortCol].months) * sortOrder)
    // ).sort(
    //   (a, b) => ((a[sortCol].years - b[sortCol].years) * sortOrder)
    // );
  }

  resort = (order, index, colMeta, data) => {
    /* reset observables that sort functions depend on */
    this._sortOrder = order;
    this._sortColumn = index;
    /* re-run sort function */
    return this.sort(data, colMeta);
  }

  isSortedBy = (index) => {
    /* Check used on line 52 and 58 og grid.jsx
       to determine which colomn header recieves
       active class state for grid sort arrow icons */
    return this._sortColumn === index;
  }

}

export default SortStore;
