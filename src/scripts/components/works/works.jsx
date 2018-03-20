import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { imgItems } from "./works.js";
import {Slide} from "./../gallery/slid.jsx";
import './works.styl';
import './../showFoto/modal.styl';
import './../showFoto/slider.styl';
import './../../../styles/buttons.styl';

const img = imgItems.map((item) => {
  return item.imgUrl
});

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalImg: 0,
      images: img,
      currentIndex: 0,
      length: img.length
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  setModal(visible, index) {
    this.setState({modalImg: this.state.images[index]});
    this.setState({modal: visible});
    this.setState({currentIndex: index});
    document.body.style.overflow = 'hidden';
  }

  addClass() {
    this.setState({
      modal: true
    });
  }

  removeClass() {
    this.setState({
      modal: false
    });
    document.body.style.overflow = '';
  }

  next() {
    if (this.state.currentIndex < this.state.length - 1) {
      this.setState({currentIndex: this.state.currentIndex + 1})
    }
    else {
      this.setState({currentIndex: 0})
    }
  }

  prev() {
    if (this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1})
    }
    else {
      this.setState({currentIndex: this.state.length - 1})
    }
  }

  onKeyPressed() {
    if (event.keyCode === 27) {
      this.removeClass()
    } else if (event.keyCode === 39) {
      this.next()
    } else if (event.keyCode === 37) {
      this.prev()
    }
  }

  render() {
    const img = imgItems.map((item) => {
      if (item.line === 1) {
        return <div key={item.id} className='item' onClick={() => this.setModal(true, item.id)} >
          <img src={item.imgUrl} alt=""/>
        </div>
      }
    });
    const img2 = imgItems.map((item) => {
      if (item.line === 2) {
        return <div key={item.id} style={{flexGrow: 3}} className='item' onClick={() => this.setModal(true, item.id)}>
          <img src={item.imgUrl} alt=""/>
        </div>
      }
    });
    const img3 = imgItems.map((item) => {
      if (item.line === 3) {
        return <div key={item.id} style={{flexGrow: 3}} className='item' onClick={() => this.setModal(true, item.id)}>
          <img src={item.imgUrl} alt=""/>
        </div>
      }
    });
    const slid = imgItems.map((item, index) => {
      return <Slide
        key={index}
        image={item.imgUrl}
        show={this.state.currentIndex === index}
      />;
    });
    const onke = addEventListener('keydown', this.onKeyPressed);
    return <section className="works">
      <div className='page-content-M'>
        <div className='content-wrapper'>
          <h3>MY WORK</h3>
          <p>Here are some of my latest lorem work ipsum tipsum.<br/>
            Click on the images to make them bigger</p>
          <div className='content-block'>
            {img}
          </div>
          <div className='content-block'>
            {img2}
          </div>
          <div className='content-block'>
            {img3}
          </div>
          <div className='btn'>
            <NavLink to='/gallery'>
              <button className='button'>
                <i className='fas fa-th'/>
                <p>galle</p><p>ry</p>
              </button>
            </NavLink>
          </div>
          <div className={classNames('modalBg', {'showed': this.state.modal})}>
            <div className='modalWindow'>
              <a className="previous" onClick={() => this.prev()}>
                <i className='fas fa-chevron-left' />
              </a>
              { slid }
              <a className="next" onClick={() => this.next()}>
                <i className='fas fa-chevron-right' />
              </a>
            </div>
            <button className='btn__remove' onClick={this.removeClass}>X</button>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { Works };