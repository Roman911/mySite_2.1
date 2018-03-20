import * as React from 'react';
import { Component } from 'react';
import { Links } from "./links.jsx";
import { Form } from "./form.jsx";
import './contacts.styl';

class Contacts extends Component {
  render() {

    return <section className="contacts">
      <div className='page-content-M border'>
        <div className='head'>
          <h2>WHERE I WORK</h2>
          <p>I'd love your feedback!</p>
        </div>
        <div className='grid-container'>
          <div className='content-item col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <div className="item">
              <img src={require('./../../../../assets/images/foto_07.jpg')} alt=""/>
            </div>
          </div>
          <div className='content-block col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
            <div className="grid-container">
              <Form />
              <Links />
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { Contacts };