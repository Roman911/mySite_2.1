import React, { Component } from 'react';
import { Header } from './header.jsx';
import { About } from './../about/about.jsx';
import { Other } from './other.jsx';
import { Portfolio } from './portfolio.jsx';
import { Works } from './../works/works.jsx';
import { ContactBaner } from "./contact.jsx";
import { Contact } from './contact.item.jsx'

class HomePage extends Component {
  render() {
    return <div>
      <Header/>
      <About />
      <Other/>
      <Portfolio/>
      <Works />
      <ContactBaner />
      <Contact />
    </div>;
  }
}

export { HomePage };