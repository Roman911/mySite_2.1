import React, { Component } from 'react';
import { navbarItems } from './navbar.config';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './navbar.styl';

class NavbarComponent extends Component {
  constructor() {
    super();
    this.state = {
      fixed: false,
      menu: false
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  addClass() {
    if (window.pageYOffset < 250) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  }

  hendleClick() {
    this.setState({ menu: !this.state.menu });
    if (this.state.menu === true) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  removeClass() {
    this.setState({ menu: false });
    document.body.style.overflow = '';
  }

  render() {
    const onsc = addEventListener('scroll', this.addClass);
    let lang;
    const languageBrowser = navigator.language;
    if (languageBrowser === 'uk-UA') {
      lang = 0;
    } else if (languageBrowser === 'ru-RU') {
      lang = 1;
    } else {
      lang = 2;
    }
    const links = navbarItems.map((item, index) => {
      return <NavLink onClick={() => this.removeClass()} key={index} className={item.class} to={item.route}><p>{item.title[lang]}</p></NavLink>;
    });
    return <nav className='navbar'>
      <div className={classNames('navbar-mob', {'showed': this.state.menu})}>
        <div className='navbar-mob__btn' onClick={() => this.hendleClick()}>
          <i className='fas fa-arrow-circle-right'/>
          <p>menu</p>
        </div>
        <div className='navbar-mob__list'>
          {links}
        </div>
      </div>
      <div className={classNames('navbar-disc', {'fixed': this.state.fixed})}>
        {links}
      </div>
    </nav>;
  }
}

export { NavbarComponent };