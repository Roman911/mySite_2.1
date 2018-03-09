import React, { Component } from 'react';
import classNames from 'classnames';
import './scrollButton.styl';

class ScrollButton extends Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
      show: false
    };
    this.addClass = this.addClass.bind(this);
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  addClass() {
    if (window.pageYOffset < 700) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true});
    }
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
    const onsc = addEventListener('scroll', this.addClass);
    return <button className={classNames('btn scroll', {'show':this.state.show})}
                   onClick={ () => { this.scrollToTop(); }}>
      <i className='fas fa-chevron-up' />
        {onsc}
    </button>;
  }

}

export { ScrollButton };