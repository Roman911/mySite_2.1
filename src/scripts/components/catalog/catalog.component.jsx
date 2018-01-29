import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import { imgItems } from "./img.js";
//import './other.styl';

class CatalogComponent extends Component {
  render() {
    const img = imgItems.map((item) => {
      return <div key={item.id} className='img'>
        <img src={ item.imgUrl } alt=""/>
      </div>
    });


    return <section className="other">
      <div className='img'></div>
      <div className="item year">
        { img }
        <h3>+</h3>
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

export { CatalogComponent };