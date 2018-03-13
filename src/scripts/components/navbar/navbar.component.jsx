import React, { Component } from 'react';
import { navbarItems } from './navbar.config';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './navbar.styl';

class NavbarComponent extends Component {
  constructor() {
    super();
    this.state = {
      fixed: false
    };
    this.addClass = this.addClass.bind(this);
  }

  addClass() {
    if (window.pageYOffset < 250) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  }

  render() {
    const onsc = addEventListener('scroll', this.addClass);
    const links = navbarItems.map((item, index) => {
      return <NavLink key={index} className={item.class} to={item.route}><p>{item.title}</p></NavLink>;
    });
    return <nav className={classNames('navbar', {'fixed':this.state.fixed})}>
      {links}
    </nav>;
  }
}

export { NavbarComponent };