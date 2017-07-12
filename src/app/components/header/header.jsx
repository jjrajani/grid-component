import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <h3 className="title">
          <a href="http://humdrum-grid-component-react.surge.sh/">Grid Component</a>
        </h3>
        <div className="links">
          <a href="https://jjrajani.github.io" target="blank">Jenna Rajani</a>
          <a href="https://github.com/jjrajani/grid-component" target="blank2"><i className="fa fa-github"/></a>
        </div>
      </div>
    );
  }

}
