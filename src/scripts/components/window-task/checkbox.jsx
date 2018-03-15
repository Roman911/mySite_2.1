import React, {Component} from 'react';
import classNames from 'classnames';
import './checked.styl';

const arr = [1, 2, 3, 5, 7];
const arr2 = [4, 6, 8, 9, 10];

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: false,
      show: false,
      arr: false,
      arr2: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
    this.setState({checkboxState: !this.state.checkboxState});
    this.setState({show: !this.state.show});
    if (id === 0) {
      this.setState({arr: !this.state.arr})
    } else if (id === 1) {
      this.setState({arr2: !this.state.arr2})
    }
  }

  render() {
    return <div className='controls'>
      <label className={classNames('cls', {'showed': this.state.show})}>
        <input
          checked={this.props.checkboxState}
          name={this.props.name}
          id={this.props.id}
          onChange={() => this.toggle(this.props.index)}
          type="checkbox"/>
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