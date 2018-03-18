import * as React from 'react';
import { Component } from 'react';
import './contacts.styl';

class Contacts extends Component {
  render() {

    return <section className="contacts">
      <div className='page-content-M'>
        <div className='head'>
          <h2>WHERE I WORK</h2>
          <p>I'd love your feedback!</p>
        </div>
        <div className='grid-container'>
          <div className='content-item col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <div className="item">
              <img src={require('./../../../../assets/images/foto_07.jpg')} alt=""/>
            </div>
          </div>
          <div className='content-block col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
            <div className="grid-container">
              <div className="content-block col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="head">
                  <p>Lets get in touch. Send me a message:</p>
                </div>
                <div className="form">
                  <input type="text" placeholder="Name" name="Name"/>
                  <input type="text" placeholder="Email" name="Email"/>
                  <textarea placeholder="Message" rows='5' name="Message"/>
                </div>
                <div className="but">
                  <button className='btn'>submit</button>
                </div>
              </div>
              <div className="content-block col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="head">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export { Contacts };