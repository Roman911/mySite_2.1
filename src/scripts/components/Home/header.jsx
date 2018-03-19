import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import './header.styl';

class Header extends Component {
  render() {

    return <section className="header" id="navhome">
      <div className="header__logo">
        <h1>ROMA_</h1><h1>LI</h1>
      </div>
    </section>;
  }
}

export { Header };