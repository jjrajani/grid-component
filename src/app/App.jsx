import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import './App.scss';
import Filter from './components/filter';
import Grid from './components/grid';
import server from '../db/server';
import { ANIMAL_COL_META } from '../db/animal';

@observer
export default class App extends Component {

  @observable animals;

  constructor(props) {
    super(props);
    server.getAnimals().then((res) => {
       this.animals = res.data;
    });
  }

  render() {
    console.log("APP", this.animals);
    return (
      <div className='app'>
        <Filter
          applyFilter={this.applyFilter}
          colMeta={ANIMAL_COL_META}
          filterData={this.animals || []}
        />
        <Grid
          colMeta={ANIMAL_COL_META}
          gridData={this.animals || []}
        />
      </div>
    );
  }

  applyFilter = (data) => {
    console.log("Applying filter on App", data)
  }
}
