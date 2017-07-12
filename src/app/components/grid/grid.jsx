import React, { Component } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';
import './grid.scss';

@observer
export default class Grid extends Component {

  render() {
    console.log(this.props.gridData)
    return (
      <div className="grid">
        <div className="grid-header">
          {this.headerRow()}
        </div>
        <div className="grid-body">
          {this.cells()}
        </div>
      </div>
    );
  }

  headerRow = () => {
    /* Map over colMeta display names to create an array of header cells */
    return this.props.colMeta.map((meta, i) => {
      return (
        <div
          key={i}
          className="grid-header-cell"
          style={{width: (100 / this.props.colMeta.length)}}
        >
          <p>{meta.displayName}</p>
        </div>
      );
    });
  }

  cells = () => {
    /* Map over array of gridData to build data rows */
    let data = this.props.gridData || [];
    return data.map((d, i) => {
      let cells = this.buildCells(d);
      return (
        <div key={i} className="row">
          {cells}
        </div>
      )
    });
  }

  buildCells = (data) => {
    /* Map over item in array of gridData to build data row */
    return this.props.colMeta.map((meta, a) => {
      let cell = this.buildCell(data, meta);
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

  buildCell = (data, meta) => {
    /* Determine type of data to create data cell */
    if (this.isObject(data[meta.dataAcsr])) {
      return this.objectCell(data[meta.dataAcsr])
    } else if (meta.filterType === 'date') {
      return this.dateCell(data[meta.dataAcsr]);
    } else if (typeof data[meta.dataAcsr] === 'string'){
      return this.basicCell(data[meta.dataAcsr], meta);
    } else if (typeof data[meta.dataAcsr] === 'number'){
      return this.basicCell(data[meta.dataAcsr], meta);
    }
  }

  basicCell = (data, meta) => {
    return (
      <p className="data">{data} {meta.suffix ? meta.suffix : null}</p>
    );
  }

  objectCell = (data) => {
    let lastCell = (i, length) => (i !== length - 1);

    return Object.keys(data).map((d, i) => {
      return (
        <p className="data" key={i}>
          {data[d]} {d}{lastCell(i, Object.keys(data).length) ? "," : null}
        </p>
      );
    });
  }

  dateCell = (data) => {
    if (data !== null) {
      return (
        <p className="data">
          {moment(data).format('LL')}
        </p>
      );
    }
  }

  isObject = (obj) => {
    return typeof obj === 'object' && obj !== null && Object.keys(obj).length > 1;
  }
}
