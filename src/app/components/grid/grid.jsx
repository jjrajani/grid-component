import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import moment from 'moment';
import './grid.scss';

import { SortStore } from './utils';

@observer
export default class Grid extends Component {
  @observable _gridData = [];
  sortStore = new SortStore();

  componentWillReceiveProps(next) {
    this._gridData = this._sort(next.gridData);
  }

  _sort = (data) => {
    /* get sort type from colMeta */
    let sortType = this.props.colMeta[this.sortStore._sortIndex].sortType;
    /* get data accessor from colMeta */
    let dataAcsr = this.props.colMeta[this.sortStore._sortIndex].dataAcsr;
    /* sort dataAcsr column with sortType funtion */
    return this.sortStore.sortFunctions[sortType](data, dataAcsr);
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-header">
          {this._headerRow()}
        </div>
        <div className="grid-body">
          {this._cells()}
        </div>
      </div>
    );
  }

  _headerRow = () => {
    /* Map over colMeta display names to create an array of header cells */
    return this.props.colMeta.map((meta, i) => {
      return (
        <div
          key={i}
          className="grid-header-cell"
          style={{width: (100 / this.props.colMeta.length)}}
        >
          <p>{meta.displayName}</p>
          { meta.sortType ? this._sortButtons(i) : null }
        </div>
      );
    });
  }

  _sortButtons = (index) => {
    return (
      <div className="sort-buttons">
        <p>
          <i
            className={(this._isSortedBy(index) && this.sortStore._sortOrder === "asc") ? "active-sort fa fa-sort-asc" : "fa fa-sort-asc"}
            onClick={this.resort.bind(this, 'asc', index)}
          />
        </p>
        <p>
          <i
            className={(this._isSortedBy(index) && this.sortStore._sortOrder === "dec") ? "active-sort fa fa-sort-desc" : "fa fa-sort-desc"}
            onClick={this.resort.bind(this, 'dec', index)}
          />
        </p>
      </div>
    );
  }

  _cells = () => {
    /* Map over array of gridData to build data rows */
    return this._gridData.map((d, i) => {
      let cells = this._buildCells(d);
      return (
        <div key={i} className="row">
          {cells}
        </div>
      )
    });
  }

  _buildCells = (data) => {
    /* Map over item in array of gridData to build data row */
    return this.props.colMeta.map((meta, a) => {
      let cell = this._buildCell(data, meta);
      return (
        <div
          key={a}
          className="body-cell"
          style={{width: (100 / this.props.colMeta.length)}}
        >
          {cell}
        </div>
      );
    });
  }

  _buildCell = (data, meta) => {
    /* Determine type of data to create data cell */

    /* if data type is an object */
    if (this._isObject(data[meta.dataAcsr])) {
      return this._objectCell(data[meta.dataAcsr]);
    }
    /* if data type is a date */
    else if (meta.sortType === 'date') {
      return this._dateCell(data[meta.dataAcsr]);
    }
    /* if data type is a string or number */
    else if (typeof data[meta.dataAcsr] === 'string' || typeof data[meta.dataAcsr] === 'number') {
      return this._basicCell(data[meta.dataAcsr], meta);
    }
  }

  _basicCell = (data, meta) => {
    /* Basic Cell HTML */
    return (
      <p className="data">{data + " " + (meta.suffix ? meta.suffix : "")}</p>
    );
  }

  _objectCell = (data) => {
    /* Object Cell HTML */

    /* internal scope function to determine if object key is the last key */
    let lastCell = (i, length) => (i !== length - 1);

    /* Loop through Object keys to create a data cell for each key*/
    let dataString = "";
    Object.keys(data).forEach((d, i) => {

      /* If not the last key, add a comma to data string*/
      dataString += (data[d] + " " + d + (lastCell(i, Object.keys(data).length) ? ", " : ""))
    });
    return (
      <p className="data">
        {dataString}
      </p>
    );
  }

  _dateCell = (data) => {
    /* Object Cell HTML */
    /* null check so moment does not return 'Invalid Date' */
    if (typeof data !== "string") {
      return (
        <p className="data">
          {moment(data).format('LL')}
        </p>
      );
    } else {
      return (
        <p className="data">{data}</p>
      );
    }
  }

  _isObject = (obj) => {
    /* Check if data type is an object with more than one key */
    /* This is used on line 101 to determine if itteration is needed */
    return typeof obj === 'object' && obj !== null && Object.keys(obj).length > 1;
  }

  _isSortedBy = (index) => {
    /* Check used on line 58 and 61 to determine
       active class state for grid sort arrow icons */
    return this.sortStore._sortIndex === index;
  }

  resort = (order, index) => {
    /* reset observables that sort function depends on */
    this.sortStore.resort(order, index);
    /* rerun sort function */
    this._gridData = this._sort(this._gridData);
  }

}
