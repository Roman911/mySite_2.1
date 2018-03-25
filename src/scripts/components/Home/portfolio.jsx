import React, { Component } from 'react';
import { item } from "./portfolio.js";
import './portfolio.styl';

class Portfolio extends Component {
  render() {
    let lang;
    const languageBrowser = navigator.language;
    if (languageBrowser === 'uk-UA') {
      lang = 0;
    } else if (languageBrowser === 'ru-RU') {
      lang = 1;
    } else {
      lang = 2;
    }
    const port = item.map((item, index) => {
      return <h2 key={index}>{item.head[lang]}</h2>
    });

    return <section className="portfolio relative" id="navportfolio">
      <div className="portfolio__header">
         {port }
      </div>
    </section>;
  }
}

export { Portfolio };