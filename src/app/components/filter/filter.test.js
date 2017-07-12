import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';
import server from '../../../db/server';

let filterData;
server.getAnimals().then((res) => {
  filterData = res.data;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter filterData={filterData}/>, div);
});
