import React, {Component} from 'react'

class Slide extends Component {
  render() {
    const date = new Date(this.props.date);
    const dateForm = date.toLocaleDateString();
    const classString = this.props.show ? "slide show" : "slide";
    return <div className={classString}>
      <div className='slide__title'>
        <h5>{this.props.title}</h5>
      </div>
      <img src={this.props.image}/>
      <div className='slide__date'>
        <h5>{dateForm}</h5>
      </div>
    </div>;
  }
}

export {Slide}