import React, {Component} from 'react'

class Slide extends Component {
  render() {
    const classString = this.props.show ? "slide show" : "slide";
    return <div className={classString}>
      <img src={this.props.image}/>
    </div>;
  }
}

export {Slide}