import React, { Component } from 'react';

class Links extends Component {

  render() {
    return <div className="content-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <div className="title">
        <p>Contact</p>
      </div>
      <div className="contact">
        <p>
          <i className='fas fa-phone'/>
          <i className='fab fa-telegram-plane'/>
          <i className='fab fa-viber'/>+38(096)7594520
        </p>
        <p><i className='fas fa-envelope'/>roma-lysyk@ukr.net</p>
        <p><i className='fab fa-facebook-square'/><a href="https://www.facebook.com/romalysyk">facebook.com/romalysyk</a></p>
        <p><i className='fab fa-instagram'/><a href="https://www.instagram.com/romanlysyk">instagram.com/romanlysyk</a></p>
        <p><i className='fab fa-twitter-square'/><a href="https://twitter.com/roma_lysyk">twitter.com/roma_lysyk</a></p>
        <p><i className='fab fa-google-plus-square'/><a href="https://plus.google.com/u/0/110130571380761850863">plus.google.com</a></p>
        <p><i className='fas fa-camera'/><a href="https://photographers.ua/RomanLisik/">photographers.ua/RomanLisik</a></p>
      </div>
    </div>;
  }
}

export { Links };