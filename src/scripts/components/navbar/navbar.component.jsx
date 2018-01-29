import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import { navbarItems } from './navbar.config';
import { NavLink } from 'react-router-dom';
import './navbar.styl';

class NavbarComponent extends Component {
  render() {
    const links = navbarItems.map((item, i) => {
      return <NavLink key={Symbol(i).toString()} className={item.class} to={item.route}>{item.title}</NavLink>;
    });

    return <nav className='navbar'>
      {links}
    </nav>;
  }
}

export { NavbarComponent };