import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './filter';
import server from '../../../db/server';

let filterData;
server.getAnimals().then((res) => {
  filterData = res.data;
});

describe('Filter component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filter filterData={filterData}/>, div);
  });
});
