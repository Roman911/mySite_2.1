import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import './works.styl';

class Works extends Component {
  render() {

    return <section className="works">
      <div className="page-content-M">
        <div className="content-wrapper">
          <h3>MY WORK</h3>
          <p>Here are some of my latest lorem work ipsum tipsum.<br/>
            Click on the images to make them bigger</p>
          <div className="grid-container">
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
            <div className="content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="item">
                <img src={require("../../../../assets/images/foto_02.jpg")} alt=""/>
              </div>
            </div>
          </div>
          <div className="btn">
            <a href="#"><button>GALLERY</button></a>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { Works };