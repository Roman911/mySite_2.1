import React, {Component} from 'react';
import classNames from 'classnames';
import './checked.styl';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({show: !this.state.show});
  }

  render() {
    return <div className='controls'>
      <label className={classNames('cls', {'showed': this.state.show})}>
        <input
          name={this.props.name}
          id={this.props.id}
          onChange={() => this.toggle(this.props.index)}
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

export {Checkbox};