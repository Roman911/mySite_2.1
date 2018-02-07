import * as React from 'react';
import { Component } from 'react';
import './contacts.styl';

class Contacts extends Component {
  render() {

    return <section className="contacts">
      <div className='page-content-M'>
        <div className='head'>
          <h2>WHERE I WORK</h2>
          <p>I'd love your feedback!</p>
        </div>
        <div className='grid-container'>
          <div className='content-block col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5'>
            <h3>131231</h3>
          </div>
          <div className='content-block col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7'>
            <h3>131231</h3>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { Contacts };