const DATA = [
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
    age: { years: 28, months: 5 },
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
    age: { years: 6, months: 5 },
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
    age: { years: 31, months: 8 },
  },
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
    age: { years: 0, months: 3 },
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
    age: { years: 0, months: 3 },
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
    age: { years: 31, months: 8 },
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
    age: { years: 6, months: 5 },
  },
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
    age: { years: 28, months: 5 },
  },
];

const DATA_SORTED_BY_NUMBER_ASC = [
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
    age: { years: 28, months: 5 },
  },
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
    age: { years: 0, months: 3 },
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
    age: { years: 31, months: 8 },
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
    age: { years: 6, months: 5 },
  },
];

const DATA_SORTED_BY_DATE_ASC = [
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
    age: { years: 0, months: 3 },
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
    age: { years: 6, months: 5 },
  },
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
    age: { years: 28, months: 5 },
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
    age: { years: 31, months: 8 },
  },
];

const DATA_SORTED_BY_AGE_ASC = [
  {
    number: 13,
    string: 'Bailey',
    date: new Date(1904, 11, 6),
    age: { years: 0, months: 3 },
  },
  {
    number: 123,
    string: 'Felix',
    date: new Date(1984, 10, 14),
    age: { years: 6, months: 5 },
  },
  {
    number: 12,
    string: 'Jenna',
    date: new Date(2014, 3, 24),
    age: { years: 28, months: 5 },
  },
  {
    number: 23,
    string: 'Donika',
    date: new Date(2034, 2, 4),
    age: { years: 31, months: 8 },
  },
];

export {
  DATA,
  COLMETA,
  DATA_SORTED_BY_STRING_ASC,
  DATA_SORTED_BY_NUMBER_ASC,
  DATA_SORTED_BY_DATE_ASC,
  DATA_SORTED_BY_AGE_ASC,
};
