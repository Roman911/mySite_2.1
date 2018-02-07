import * as React from 'react';
import { Component } from 'react';
import { task } from "./task.js";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: true
    }
  }

  toggle() {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }
  render() {
    const tasks = task.map((item) => {
      return <input
        key={item.id}
        id={item.id}
        name={item.title}
        type="checkbox"
        checked={this.checkboxState}
        onClick={this.toggle.bind(this)}
      />});
    const tasks1 = task.map((item) => {
      return <label htmlFor={item.id} className='cls'>
        <div className='input'>
              <span className='deg'>

              </span>
          <span className="rad">

              </span>
        </div>
        <p>{item.name}</p>
      </label>});
    return ( <div className='window-task__categories'>
        <p>Categories</p>
        {tasks}
        <div id='controls'>
          {tasks1}
        </div>
      </div>
    );
  }
}

export { Checkbox };