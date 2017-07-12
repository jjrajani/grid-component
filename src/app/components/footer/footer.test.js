import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';


describe('Header component', () => {
  it('renders without crashing', async () => {

    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });
});
