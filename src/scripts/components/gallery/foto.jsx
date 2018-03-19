import React, {Component} from 'react';
import classNames from 'classnames';
import {Slide} from "./slid.jsx";
import './gallery.styl';
import './../showFoto/modal.styl';
import './../showFoto/slider.styl';

class Foto extends Component {
  constructor(props) {
    super(props);
    const img = props.img;
    const imgUrl = img.map((item) => {
      return item.imgUrl
    });
    this.state = {
      modal: false,
      modalImg: 0,
      images: imgUrl,
      currentIndex: 0,
      length: img.length,
      res: false
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  setModal(visible, index, length) {
    this.setState({modalImg: this.state.images[index]});
    this.setState({modal: visible});
    this.setState({currentIndex: index});
    this.setState({length: length});
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
    const imgItem = this.props.img;
    const img = imgItem.map((item, index) => {
      if (item.column === 1) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={this.state.images[item.id]}/>
        </div>;
      }
    });
    const img2 = imgItem.map((item, index) => {
      if (item.column === 2) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={this.state.images[item.id]}/>
        </div>;
      }
    });
    const img3 = imgItem.map((item, index) => {
      if (item.column === 3) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={this.state.images[item.id]}/>
        </div>;
      }
    });
    const img4 = imgItem.map((item, index) => {
      if (item.column === 4) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={this.state.images[item.id]}/>
        </div>;
      }
    });
    const slid = imgItem.map((item, index) => {
      return <Slide
        key={index}
        image={item.imgUrl}
        show={this.state.currentIndex === index}
      />;
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
              <div className='content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                {img}
              </div>
              <div className='content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                {img2}
              </div>
              <div className='content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                {img3}
              </div>
              <div className='content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                {img4}
              </div>
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
              <button onClick={this.removeClass}>X</button>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export {Foto};