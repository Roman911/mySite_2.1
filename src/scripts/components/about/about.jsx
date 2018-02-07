import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import './about.styl';

class About extends Component {
  render() {

    return <section className="about-me">
      <div className="page-content-M">
        <div className="item">
          <h4>ABOUT ME</h4>
          <p className="italic">I love photography</p>
          <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="grid-container">
          <div className="content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="item">
              <p><b><i className="fa fa-user"></i> My Name:</b></p>
              <p>Roman Lysyk</p>
              <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
            </div>
          </div>
          <div className="content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="item">
              <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div className="content-block">
          <p>Im really good at:</p>
          <div className="properties">
            <div className="properties__header">
              <i className="fa fa-camera"></i>
              <p> Photography</p>
            </div>
            <div className="properties__bar">
              <div className="properties__bar_rate">
                <p>90 %</p>
              </div>
            </div>
            <div className="properties__header">
              <i className="fa fa-laptop"></i>
              <p> Web Design</p>
            </div>
            <div className="properties__bar">
              <div className="properties__bar_rate">
                <p>85 %</p>
              </div>
            </div>
            <div className="properties__header">
              <i className="fa fa-photo"></i>
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