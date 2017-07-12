import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid';
import server from '../../../db/server';
import { ANIMAL_COL_META } from '../../../db/animal';


describe('Grid component', () => {
  it('renders without crashing', async () => {
    let filterData;
    await server.getAnimals().then((res) => {
      filterData = res.data;
    });

    const div = document.createElement('div');
    ReactDOM.render(<Grid gridData={filterData} colMeta={ANIMAL_COL_META}/>, div);
  });
});
