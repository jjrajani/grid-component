import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <h3 className="title">
          <a>Grid Component</a>
        </h3>
        <div className="links">
          <a href="https://jjrajani.github.io">Jenna Rajani</a>
          <a href="https://github.com/jjrajani/grid-component">GitHub</a>
        </div>
      </div>
    );
  }

}
