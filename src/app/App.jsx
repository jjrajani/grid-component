import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import './App.scss';
import Header from './components/header';
import Grid from './components/grid';
import Footer from './components/footer';
import server from '../db/server';
import { ANIMAL_GRID_META } from '../db/animal';
import { PROMOTION_GRID_META } from '../db/promotion';

@observer
export default class App extends Component {

  @observable animals;
  @observable promotions;

  constructor(props) {
    super(props);
    server.getAnimals().then((res) => {
       this.animals = res.data;
    });
    server.getPromotions().then((res) => {
       this.promotions = res.data;
    });
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Grid
          colMeta={ANIMAL_GRID_META}
          gridData={this.animals || []}
        />
        <Grid
          colMeta={PROMOTION_GRID_META}
          gridData={this.promotions || []}
        />
      <Footer />
      </div>
    );
  }
}
