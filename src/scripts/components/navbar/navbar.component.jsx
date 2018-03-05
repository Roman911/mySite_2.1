import React, { Component } from 'react';
import { navbarItems } from './navbar.config';
import { NavLink } from 'react-router-dom';
import './navbar.styl';

class NavbarComponent extends Component {

  render() {
    const links = navbarItems.map((item, index) => {
      return <NavLink key={index} className={item.class} to={item.route}><p>{item.title}</p></NavLink>;
    });

    return <nav className='navbar'>
      {links}
    </nav>;
  }
}

export { NavbarComponent };