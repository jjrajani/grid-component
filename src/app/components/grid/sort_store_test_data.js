const DATA = [
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
  },
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
  },
];

const COLMETA = [
  {
    dataAcsr: 'number',
    displayName: 'Number',
    sortType: 'number',
  },
  {
    dataAcsr: 'string',
    displayName: 'String',
    sortType: 'string',
  },
  {
    dataAcsr: 'date',
    displayName: 'Date',
    sortType: 'date',
  },
];

const DATA_SORTED_BY_STRING_ASC = [
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
  },
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
  },
];

const DATA_SORTED_BY_NUMBER_ASC = [
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
  },
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
  },
];

const DATA_SORTED_BY_DATE_ASC = [
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
  },
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
  },
];

export {
  DATA,
  COLMETA,
  DATA_SORTED_BY_STRING_ASC,
  DATA_SORTED_BY_NUMBER_ASC,
  DATA_SORTED_BY_DATE_ASC,
};
