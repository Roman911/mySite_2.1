import React, { Component } from 'react';
import { task } from "./task.js";
import { taskRadio } from "./task-radio.js";
import { Checkbox } from "./checkbox.jsx";
import { Radio } from "./radio.jsx";
import './window-task.styl';

const checked = task.slice();
const radio = taskRadio.slice();

class Window extends Component {

  render() {
    const checkbox = checked.map((item, index) => {
      return <div key={index} >
        < Checkbox name={item.name} />
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