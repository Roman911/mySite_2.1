import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import './portfolio.styl';

class Portfolio extends Component {
  render() {

    return <section className="portfolio relative">
      <div className="portfolio__header">
        <h2>PORTFOLIO</h2>
      </div>
    </section>;
  }
}

export { Portfolio };