import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import './footer.styl';

class Footer extends Component {
  render() {
    let date = new Date();
    let year = date.getFullYear();

    return <footer className="footer">
      <div className="content-wrapper">
        <div className="item">
          <a href="https://www.facebook.com/romalysyk" target="_blank"><i className="fa fa-facebook-official"></i></a>
          <a href="https://www.instagram.com/romanlysyk/" target="_blank"><i className="fa fa-instagram"></i></a>
          <a href="https://plus.google.com/u/0/110130571380761850863" target="_blank"><i className="fa fa-google-plus"></i></a>
          <a href="https://photographers.ua/RomanLisik/" target="_blank"><i className="fa fa-camera"></i></a>
          <a href="https://photographers.ua/RomanLisik/" target="_blank"><i className="fa fa-twitter"></i></a>
        </div>
        <div className="date">
          <p>Roman-Lysyk © 2012-{ year }</p>
          <p>. All rights reserved.</p>
        </div>
      </div>
    </footer>;
  }
}

export { Footer };