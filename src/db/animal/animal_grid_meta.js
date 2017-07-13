const ANIMAL_GRID_META = [
  {
    dataAcsr: 'name',
    displayName: 'Name',
    sortType: 'string',
  },
  {
    dataAcsr: 'species',
    displayName: 'Species',
    sortType: 'string',
  },
  {
    dataAcsr: 'dob',
    displayName: 'DOB',
    sortType: 'date',
  },
  {
    dataAcsr: 'dod',
    displayName: 'DOD',
    sortType: 'date',
    nullSuffix: 'Still Living' /* Reference grid.jsx line 154 _dateCell to see implementation */
  },
  {
    dataAcsr: 'age',
    displayName: 'Age',
    sortType: 'age',
  },
];

export default ANIMAL_GRID_META;
