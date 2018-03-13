import React, { Component } from 'react'
import { navbarItems } from "./navbar.config.js";
import './navbarHome.styl'

class Navbar extends Component {
  constructor() {
    super();

  }



  render() {
    let domNode = ReactDOM.findDOMNode(refs.divr);
    let domRect = domNode.getBoundingClientRect();
    const links = navbarItems.map((item, index) => {
      return <a href={item.route} key={index} className='navbar-home__link'><p>{item.title}</p></a>
    });
    const divt = <div className='divr'>divr</div>;
    return <nav className='navbar-home' id='nav'>
      { links }
      { console.log(domRect) }
    </nav>
  }
}

export { Navbar }