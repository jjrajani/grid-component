import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import './App.scss';
import Filter from './components/filter';
import server from '../db/server';

@observer
class App extends Component {

  @observable filterData;

  constructor(props) {
    super(props);
    server.getAnimals().then((res) => {
       this.filterData = res.data;
      console.log("Gots it", res.data)
    });
  }

  render() {
    console.log(this.filterData);
    return (
      <div className='app'>
        <Filter filterData={this.filterData}/>
      </div>
    );
  }
}

export default App;
