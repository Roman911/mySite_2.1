import React, {Component} from 'react'

class Slide extends Component {
  render() {
    const date = new Date(this.props.date);
    const dateForm = date.toLocaleDateString();
    const classString = this.props.show ? "slide show" : "slide";
    return <div className={classString}>
      <div className='slide__title'>
        <h4>{this.props.title}</h4>
      </div>
      <img src={this.props.image}/>
      <div className='slide__date'>
        <h4>{dateForm}</h4>
      </div>
    </div>;
  }
}

export {Slide}