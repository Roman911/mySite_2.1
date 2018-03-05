import React, { Component } from 'react';
import './scrollButton.styl';

class ScrollButton extends Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
    return <button className='btn scroll'
                   onClick={ () => { this.scrollToTop(); }}>
      <i className='fas fa-chevron-up' />
    </button>;
  }

}

export { ScrollButton };