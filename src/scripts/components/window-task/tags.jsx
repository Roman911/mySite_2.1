import React, { Component } from 'react';
import './../../../styles/buttons.styl'

class Tags extends Component {

  render() {
    const classString = this.props.show ? "btn__tag active" : "btn__tag";
    return <div className={classString}>
      <button className='button__tag'><p>{this.props.tag}</p></button>
    </div>
  }
}

export { Tags };