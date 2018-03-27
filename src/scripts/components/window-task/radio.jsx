import React, { Component } from 'react';
import classNames from "classnames";

class Radio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='controls'>
      <label className={classNames('cls', {'showed': this.props.show})}>
        <input
          name={this.props.name}
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