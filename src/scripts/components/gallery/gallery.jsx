import * as React from 'react';// eslint-disable-line
import classNames from 'classnames'
import { Component } from 'react';
import { imgItems } from "./foto.js";
import { Window } from "./../window-task/window-task.jsx";
import './gallery.styl';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  addClass() {
    this.setState({
      modal:true
    });
  }

  removeClass() {
    this.setState({
      modal:false
    });
  }

  render() {
    const img = imgItems.map((item) => {
      return <div key={item.id} className='content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="item">
          <img onClick={ this.addClass } src={ item.imgUrl } alt=""/>
        </div>
      </div>;
    });

    return <section className="gallery">
      <div className="page-content-L">

        < Window />

        <div className="page-content-M">
          <div className="content-wrapper">
            <h3>MY WORK</h3>
            <p>Here are some of my latest lorem work ipsum tipsum.<br/>
              Click on the images to make them bigger</p>
            <div className="grid-container">
              { img }
            </div>
            <div className={classNames('modalBg', {'showed':this.state.modal})}>
              <div className='modalWindow'>

              </div>
              <button onClick={ this.removeClass }>remove class</button>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { Gallery };