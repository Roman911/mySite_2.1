import * as React from 'react';// eslint-disable-line
import classNames from 'classnames'
import { Component } from 'react';
import { imgItems } from "./works.js";
import './works.styl';
import './modal.styl';

class Works extends Component {
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
          <img  src={ item.imgUrl } alt=""/>
          <button onClick={ this.addClass }> {item.id}</button>
        </div>
      </div>;
    });

    return <section className="works">
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

          <div className="btn">
            <a href="#"><button>GALLERY</button></a>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { Works };