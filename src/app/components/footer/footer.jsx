import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <h5 className="title">
          grid component
        </h5>
        <div className="links">
          <a href="https://jjrajani.github.io" target="blank">Jenna Rajani</a>
          <a href="https://github.com/jjrajani/grid-component" target="blank2"><i className="fa fa-github"/></a>
        </div>
      </div>
    );
  }

}
