import React, { Component } from 'react';
import { task } from "./task.js";
import { taskRadio } from "./task-radio.js";
import { Checkbox } from "./checkbox.jsx";
import { Radio } from "./radio.jsx";
import './window-task.styl';

const checked = task.slice();
const radio = taskRadio.slice();

const arr = [1, 2, 3, 5, 7];
const arr2 = [4, 6, 8, 9, 10];

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: false,
      arr: false,
      arr2: false,
    };
    this.toggle = this.toggle.bind(this);
    console.log(props)
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
    const checkbox = checked.map((item, index) => {
      return <div key={index} onChange={() => this.toggle(index)} >
        < Checkbox name={item.name} id={item.id} index={index} checked={this.state.checkboxState} />
      </div>
    });
    const radio1 = radio.map((item, index) => {
      return <div key={index}>
        < Radio name={item.name} />
      </div>
    });
    return <div className='content-wrapper1'>
      <div className='window-task'>
        <div className="window-task__header">
          <p>Select</p>
        </div>
        <div className='window-task__categories'>
          <p>Categories</p>
          { checkbox }
        </div>
        <div className='window-task__radio'>
          <p>Date</p>
          { radio1 }
        </div>
      </div>
    </div>;
  }
}

export { Window };