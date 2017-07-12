import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import { observable } from 'mobx';
import './filter.scss';

@observer
export default class Filter extends Component {

  render() {
    // console.log("FILTER filterData", this.props.filterData);
    console.log("FILTER colMeta", this.props.colMeta);
    // console.log("FILTER applyFilter", this.props.applyFilter);
    return (
      <div className="filters">
        {this.buildFilters()}
      </div>
    );
  }

  buildFilters = () => {
    return this.props.colMeta.map((col, i) => {
      return this.buildFilter[col.filterType](col, i);
    });
  }

  buildFilter = {
    string: (col, i) => { return this.buildStringFilter(col, i) },
    date: (col, i) => { return this.buildDateFilter(col, i) },
    number: (col, i) => { return this.buildNumberFilter(col, i) },
  }

  buildStringFilter = (col, i) => {
    let options = this.getOptions(col.dataAcsr);
    console.log(options);
    return (
      <div className="filter" key={i}>
        <label>Filter by {col.displayName}</label>
        <div className="dropdown">
          <input placeholder={``}></input>
          <button onClick={this.toggleDropDown.bind(this)}><i className="fa fa-chevron-down"></i></button>
        </div>
      </div>
    )
  }

  buildDateFilter = (col, i) => {
    // console.log("Date filter", col, i)
  }

  buildNumberFilter = (col, i) => {
    // console.log("Number filter", col, i)
  }

  getOptions = (dataAcsr) => {
    let options = new Set();
    this.props.filterData.forEach((d) => {
      options.add(d[dataAcsr]);
    });
    return options;
  }

  toggleDropDown = () => {
    console.log("toggle")
  }
}
