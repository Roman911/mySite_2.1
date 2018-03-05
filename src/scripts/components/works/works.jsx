import React, { Component } from 'react';// eslint-disable-line
import classNames from 'classnames'
import { imgItems } from "./works.js";
// import Modal from 'react-modal';
import './works.styl';
import './modal.styl';

const imgs = imgItems.map((item) => {
  return item.imgUrl
});

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
      modalImg: imgs[0],
      images: imgs
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  setModal(vis, imageId) {
      this.setState({ modalImg: this.state.images[imageId] });
      this.setState({ modal: vis })
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
    let img = this.state.images.map((val, key) => {
      return <div key={key} onClick={() => this.setModal(true, key) }>
          <div>
            <img src={this.state.images[key]} />
          </div>
      </div>;
    });

    return <section className="works">
      <div>
        <div >
            <div className={classNames('modalBg', {'showed':this.state.modal})}>
                <div className='modalWindow'>
                    <img src={this.state.modalImg} alt=""/>
                </div>
                <button onClick={ this.removeClass }>remove class</button>
            </div>
        </div>
          { img }
      </div>
    </section>;
  }
}

export { Works };