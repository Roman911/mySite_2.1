import React, { Component } from 'react'
import { navbarItems } from "./navbar.config.js";
import './navbarHome.styl'

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    const links = navbarItems.map((item, index) => {
      return <div key={index} className='navbar-home__link'><p>{item.title}</p></div>
    });
    return <nav className='navbar-home'>
      { links }
    </nav>
  }
}

export { Navbar }