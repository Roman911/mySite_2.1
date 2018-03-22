import React, { Component } from 'react'

class Form extends Component {

  render() {
    return <div className="content-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <div className="title">
        <p>Lets get in touch. Send me a message:</p>
      </div>
      <div className="form">
        <input type="text" placeholder="Name" name="Name"/>
        <input type="text" placeholder="Email" name="Email"/>
        <textarea placeholder="Message" rows='5' name="Message"/>
      </div>
      <div className="btn btn__little">
        <button className='button'>
          <i className='fab fa-telegram-plane'/>
          <p>subm</p>
          <p>it</p>
        </button>
      </div>
    </div>;
  }
}

export { Form };