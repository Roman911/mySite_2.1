import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import './other.styl';

class Other extends Component {
  render() {

    const date = new Date();
    const years = date.getFullYear();
    const start = 2012;
    const year = years - start;

    return <section className="other">
        <div className="item year">
          <h3>{ year }+</h3>
          <p>Years</p>
        </div>
        <div className="item">
          <h3>55+</h3>
          <p>Projects Done</p>
        </div>
        <div className="item">
          <h3>89+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="item">
          <h3>150+</h3>
          <p>Meetings</p>
        </div>
      </section>;
  }
}

export { Other };