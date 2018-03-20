import React, { Component } from 'react';
import { Form } from "./../contacts/form.jsx";
import { Links } from "./../contacts/links.jsx";
import './contact.styl';

class Contact extends Component {

  render() {
    return <section className="contacts">
      <div className='page-content-M'>
        <div className='head'>
          <h2>WHERE I WORK</h2>
          <p>I'd love your feedback!</p>
        </div>
        <div className='grid-container'>
          <Form />
          <Links />
        </div>
      </div>
    </section>
  }
}

export { Contact };