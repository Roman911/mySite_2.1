import React, {Component} from 'react';
import classNames from 'classnames';
import {imgItems} from "./foto.js";
import {Slide} from "./slid.jsx";
import './gallery.styl';
import './../showFoto/modal.styl';
import './../showFoto/slider.styl';

const leng = imgItems.slice();
const imgs = leng.map((item) => {
  return item.imgUrl
});

const arr = [1, 2, 3, 5, 7];
const arr2 = [4, 6, 8, 9, 10];

class Foto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalImg: imgs[0],
      images: imgs,
      currentIndex: 0,
      length: leng.length,
      arr: true
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  setModal(vis, index) {
    this.setState({modalImg: this.state.images[index]});
    this.setState({modal: vis});
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

  arr5() {
    if (this.state.arr === true) {
      return arr2
    } else {
      return ''
    }
  }

  render() {
    const img = leng.map((val, index) => {
      return <div key={index} className='content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="item" onClick={() => this.setModal(true, index)}>
          <img src={this.state.images[index]}/>
        </div>
      </div>;
    });
    const slid = leng.map((item, index) => {
      return <Slide
        key={index}
        image={item.imgUrl}
        show={this.state.currentIndex === index}
      />
    });
    const num = [this.arr5()].map((item, index) => {
      return <div key={index}>
        <p>{item}</p>
      </div>
    });
    const onke = addEventListener('keydown', this.onKeyPressed);
    return <section className="gallery">
      <div className="page-content-L">
        <div className="page-content-M">
          <div className="content-wrapper">
            <h3>MY WORK</h3>
            <p>Here are some of my latest lorem work ipsum tipsum.<br/>
              Click on the images to make them bigger</p>
            <div className="grid-container">
              {img}
            </div>
            {num}
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
              <button onClick={this.removeClass}>X</button>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export {Foto};