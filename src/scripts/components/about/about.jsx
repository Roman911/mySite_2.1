import React, { Component } from 'react';
import './about.styl';
import { contentItem } from "./content.js";

class About extends Component {
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

    const header = contentItem.map((item, index) => {
      return <div key={index} className="item">
        <h4>{item.aboutMe[lang]}</h4>
        <p className="italic">{item.lovePhoto[lang]}</p>
        <p>{item.text[lang]}</p>
      </div>;
    });

    const title = contentItem.map((item, index) => {
      return <div key={index} className="content">
        <p><b><i className="fas fa-user"/> {item.title[lang]}</b></p>
        <p>{item.name[lang]}</p>
        <img src={require("../../../../assets/images/foto_18.jpg")} alt=""/>
      </div>;
    });

    const text = contentItem.map((item, index) => {
      return <div key={index} className="content content__text">
        <p>{item.text2[lang]}</p>
      </div>
    });

    return <section className="about-me" id="navabout">
      <div className="page-content-M">
        {header}
        <div className="grid-container">
          <div className="content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            {title}
          </div>
          <div className="content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            {text}
          </div>
        </div>
        <div className="content-block">
          <p>Im really good at:</p>
          <div className="properties">
            <div className="properties__header">
              <i className="fas fa-camera-retro"/>
              <p> Photography</p>
            </div>
            <div className="properties__bar">
              <div className="properties__bar_rate">
                <p>90 %</p>
              </div>
            </div>
            <div className="properties__header">
              <i className="fas fa-laptop"/>
              <p> Web Design</p>
            </div>
            <div className="properties__bar">
              <div className="properties__bar_rate">
                <p>85 %</p>
              </div>
            </div>
            <div className="properties__header">
              <i className="fas fa-images"/>
              <p> Photoshop</p>
            </div>
            <div className="properties__bar">
              <div className="properties__bar_rate">
                <p>75 %</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { About };