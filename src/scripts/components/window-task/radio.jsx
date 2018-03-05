import React, { Component } from 'react';
import classNames from "classnames";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: false,
      show: false
    }
  }

  toggle() {
    this.setState({checkboxState: !this.state.checkboxState});
    this.setState({show: !this.state.show});
  }

  render() {
    return <div className='controls'>
      <label className={classNames('cls', {'showed': this.state.show})}>
        <input
          checked={this.checkboxState}
          name={this.props.name}
          onChange={this.toggle.bind(this)}
          type="checkbox"
        />
        <div className='input'>
          <span className='deg'>
          </span>
          <span className='rad'>
          </span>
        </div>
        <p>{this.props.name}</p>
      </label>
    </div>;
  }
}

export { Radio };