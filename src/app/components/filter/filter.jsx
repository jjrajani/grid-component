import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './filter.scss';

@observer
export default class Filter extends Component {

  render() {
    console.log("FILTER filterData", this.props.filterData);
    console.log("FILTER applyFilter", this.props.applyFilter);
    return (
      <div className="filter">
        Filter
      </div>
    );
  }
}
