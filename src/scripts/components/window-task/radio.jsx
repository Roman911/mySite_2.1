import * as React from 'react';
import { Component } from 'react';
import { taskRadio } from "./task-radio";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const tasks = taskRadio.map((item) => {
      return <input
        id={item.id}
        name={item.name}
        type="radio"
        checked={this.state.isGoing}
        onChange={this.handleInputChange} />});
    const tasks1 = taskRadio.map((item) => {
      return <label htmlFor={item.id} className='cls'>
            <div className='input'>
              <span className='deg'>

              </span>
              <span className="rad">

              </span>
            </div>
            <p>{item.title}</p>
          </label>});
    return (
      <div className='window-task__categories'>
        <p>Date</p>
        {tasks}
        <div id='controls'>
          {tasks1}
        </div>
      </div>
    );
  }
}

export { Radio };