import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <h3 className="title">
          <a>grid component</a>
        </h3>
        <div className="links">
          <a href="https://jjrajani.github.io">jenna rajani</a>
          <a href="https://github.com/jjrajani/grid-component">github</a>
        </div>
      </div>
    );
  }

}
