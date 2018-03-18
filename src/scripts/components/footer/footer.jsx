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
          <a href="https://www.facebook.com/romalysyk" target="_blank"><i className="fab fa-facebook-square"/></a>
          <a href="https://www.instagram.com/romanlysyk/" target="_blank"><i className="fab fa-instagram"/></a>
          <a href="https://plus.google.com/u/0/110130571380761850863" target="_blank"><i className="fab fa-google-plus-square"/></a>
          <a href="https://photographers.ua/RomanLisik/" target="_blank"><i className="fas fa-camera"/></a>
          <a href="https://twitter.com/?lang=uk" target="_blank"><i className="fab fa-twitter-square"/></a>
        </div>
        <div className="date">
          <p>Roman-Lysyk © 2012-{ year }. All rights reserved.</p>
        </div>
      </div>
    </footer>;
  }
}

export { Footer };