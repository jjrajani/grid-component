import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import moment from 'moment';
import './grid.scss';

@observer
export default class Grid extends Component {

  @observable _sortIndex = 4;
  @observable _sortOrder = 'asc';
  @observable _gridData = [];

  _sortFunctions = {
    string: (data, sortCol) => (this.basicSort(data, sortCol)),
    number: (data, sortCol) => (this.basicSort(data, sortCol)),
    date: (data, sortCol) => (this.basicSort(data, sortCol)),
    age: (data, sortCol) => (this.ageSort(data, sortCol)),
  }

  componentWillReceiveProps(next) {
    this._gridData = this._sort(next.gridData);
  }

  _sort = (data) => {
    let sortType = this.props.colMeta[this._sortIndex].sortType;
    let dataAcsr = this.props.colMeta[this._sortIndex].dataAcsr;
    return this._sortFunctions[sortType](data, dataAcsr);
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
          <p className={(this._isSortedBy(i) && this._sortOrder === "asc") ? "active-sort" : ""}><i className="fa fa-long-arrow-up"></i></p>
          <p className={(this._isSortedBy(i) && this._sortOrder === "dec") ? "active-sort" : ""}><i className="fa fa-long-arrow-down"></i></p>
        </div>
      );
    });
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
    if (this._isObject(data[meta.dataAcsr])) {
      return this._objectCell(data[meta.dataAcsr])
    } else if (meta.sortType === 'date') {
      return this._dateCell(data[meta.dataAcsr]);
    } else if (typeof data[meta.dataAcsr] === 'string'){
      return this._basicCell(data[meta.dataAcsr], meta);
    } else if (typeof data[meta.dataAcsr] === 'number'){
      return this._basicCell(data[meta.dataAcsr], meta);
    }
  }

  _basicCell = (data, meta) => {
    meta.suffix = meta.dataAcsr === "timeLeft" ? "" : meta.suffix;
    return (
      <p className="data">{data} {meta.suffix ? meta.suffix : null}</p>
    );
  }

  _objectCell = (data) => {
    let lastCell = (i, length) => (i !== length - 1);

    return Object.keys(data).map((d, i) => {
      return (
        <p className="data" key={i}>
          {data[d]} {d}{lastCell(i, Object.keys(data).length) ? "," : null}
        </p>
      );
    });
  }

  _dateCell = (data) => {
    if (data !== null) {
      return (
        <p className="data">
          {moment(data).format('LL')}
        </p>
      );
    }
  }

  _isObject = (obj) => {
    return typeof obj === 'object' && obj !== null && Object.keys(obj).length > 1;
  }

  _isSortedBy = (index) => {
    return this._sortIndex === index;
  }

  basicSort = (data, sortCol) => {
    return data.sort((a, b) => {
      return this._sortOrder === 'asc'
      ? a[sortCol] < b[sortCol] ? -1 : 1
      : a[sortCol] < b[sortCol] ? 1 : -1;
    });
  }

  ageSort = (data, sortCol) => {
    console.log('age sort', data, sortCol);
    return data.sort((a, b) => {
      return this._sortOrder === 'asc'
      ? a[sortCol].months < b[sortCol].months ? -1 : 1
      : a[sortCol].months < b[sortCol].months ? 1 : -1;
    }).sort((a, b) => {
      return this._sortOrder === 'asc'
      ? a[sortCol].years < b[sortCol].years ? -1 : 1
      : a[sortCol].years < b[sortCol].years ? 1 : -1;
    });
  }

}
