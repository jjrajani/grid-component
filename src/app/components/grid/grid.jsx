import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import moment from 'moment';
import './grid.scss';

import { SortStore } from './utils';

@observer
export default class Grid extends Component {
  /* _gridData variable needed because this.props.gridData
    is readOnly and we will need to sort. */
  @observable _gridData = [];
  sortStore = new SortStore();

  componentWillReceiveProps(next) {
    /* Set read only props to local variable _gridData so we can resort. */
    this._gridData = this.sortStore.sort(next.gridData, next.colMeta);
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-header">
          {this._headerRow()}
        </div>
        <div className="grid-body">
          {this._rows()}
        </div>
      </div>
    );
  }

  _headerRow = () => {
    /* Map over colMeta display names to create an array of header cells HTML. */
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
    /* Build sort buttons. Give sort button active-class
       based on sortStore current sort selections. */
    return (
      <div className="sort-buttons">
        <p>
          <i
            className={(this.sortStore.isSortedBy(index) && this.sortStore._sortOrder === "asc") ? "active-sort fa fa-sort-asc" : "fa fa-sort-asc"}
            onClick={this.resort.bind(this, 'asc', index)}
          />
        </p>
        <p>
          <i
            className={(this.sortStore.isSortedBy(index) && this.sortStore._sortOrder === "dec") ? "active-sort fa fa-sort-desc" : "fa fa-sort-desc"}
            onClick={this.resort.bind(this, 'dec', index)}
          />
        </p>
      </div>
    );
  }

  _rows = () => {
    /* Map over array of gridData to build data rows. */
    return this._gridData.map((d, i) => {
      /* Build individual cells. */
      let cells = this._buildCells(d);
      return (
        <div key={i} className="row">
          {cells}
        </div>
      )
    });
  }

  _buildCells = (data) => {
    /* Map over item in array of gridData to build data cell. */

    /* Use colMeta.length to determine width of cells. */
    let cellWidth = ((100 / this.props.colMeta.length) + "%");

    return this.props.colMeta.map((meta, a) => {
      /* Create individual cell. */
      let cell = this._buildCell(data, meta);
      return (
        <div
          key={a}
          className="body-cell"
          style={{width: cellWidth}}
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
    /* Otherwise return invalid data cell to alert dev of missing data type cell */
    else {
      return this._invalidDataCell();
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

    /* Internaly scoped function to determine if
       object key is the last key. Used on line 146. */
    let lastKey = (i, length) => (i !== length - 1);

    /* Loop through Object keys to create a data cell for each key */
    let dataString = "";
    Object.keys(data).forEach((d, i) => {

      /* += to append string to existing dataString.
       If not the last key, add a comma to data string. */
      dataString += (data[d] + " " + d + (lastKey(i, Object.keys(data).length) ? ", " : ""))
    });
    return (
      <p className="data">
        {dataString}
      </p>
    );
  }

  _dateCell = (data) => {
    /* Object Cell HTML */
    /* dataType check so moment does not return 'Invalid Date'.
       This is neccessary for Animal objects whose DOD is "Still Living". */
    if (typeof data !== "string") {
      /* Date Object Cell */
      return (
        <p className="data">
          {moment(data).format('LL')}
        </p>
      );
    } else {
      /* Animal whose DOD is "Still Living" */
      return (
        <p className="data">{data}</p>
      );
    }
  }

  _invalidDataCell = () => {
    /* Invalid Data Cell HTML */
    return (
      <p>Data Type Invalid</p>
    );
  }

  _isObject = (obj) => {
    /* Check if data type is an object with more than one key */
    /* This is used on line 109 to determine if itteration is needed */
    return typeof obj === 'object' && obj !== null && Object.keys(obj).length > 1;
  }

  resort = (order, index) => {
    /* resort grid data */
    this._gridData = this.sortStore.resort(order, index, this.props.colMeta, this._gridData);
  }

}
