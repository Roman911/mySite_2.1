import React, { Component } from 'react';
import { Navbar } from './../navbarHome/navbar.jsx';
import { Header } from './header.jsx';
import { About } from './../about/about.jsx';
import { Other } from './other.jsx';
import { Portfolio } from './portfolio.jsx';
//import { Works } from './../works/works.jsx';

class HomePage extends Component {
  render() {
    return <div>
      <Navbar/>
      <Header/>
      <About/>
      <Other/>
      <Portfolio/>

    </div>;
  }
}

export { HomePage };