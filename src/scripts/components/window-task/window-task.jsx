import * as React from 'react';
import { Component } from 'react';
import { Checkbox } from "./checkbox.jsx";
import { Radio } from "./radio.jsx";
import './window-task.styl';

class Window extends Component {

  render() {
    return <div className='content-wrapper1'>
      <div className='window-task'>
        <div className="window-task__header">
          <p>Select</p>
        </div>
          < Checkbox />
          < Radio />
      </div>
    </div>;
  }
}

export { Window };