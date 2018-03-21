import React, { Component } from 'react';
import { Foto } from "./foto.jsx";
import { task } from "./../window-task/task.js";
import { taskRadio } from "./../window-task/task-radio.js";
import { imgItems } from './foto.js'
import { Checkbox } from "./../window-task/checkbox.jsx";
import { Radio } from "./../window-task/radio.jsx";
import './gallery.styl';
import './../window-task/window-task.styl';

const checked = task.slice();
const radio = taskRadio.slice();

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: false,
      portrait: false,
      children: false,
      family: false,
      gestation: false,
      radioState: false,
      date: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
    this.setState({checkboxState: !this.state.checkboxState});
    if (id === 0) {
      this.setState({portrait: !this.state.portrait})
    } else if (id === 1) {
      this.setState({children: !this.state.children})
    } else if (id === 2) {
      this.setState({family: !this.state.family})
    } else if (id === 3) {
      this.setState({gestation: !this.state.gestation})
    }
  }

  toggleRadio(id) {
    this.setState({radioState: !this.state.radioState});
    if (id === 0) {
      this.setState({date: !this.state.date})
    }
  }

  render() {
    let img = [];
    imgItems.map((item) => {
      if (this.state.portrait || this.state.children || this.state.family || this.state.gestation || !item.imgUrl) {
        return;
      }
      img.push(item);
    });
    imgItems.map((item) => {
      if (!this.state.portrait || !item.portrait) {
        return;
      }
      img.push(item)
    });
    imgItems.map((item) => {
      if (!this.state.children || !item.children) {
        return;
      }
      img.push(item)
    });
    imgItems.map((item) => {
      if (!this.state.family || !item.family) {
        return;
      }
      img.push(item)
    });
    imgItems.map((item) => {
      if (!this.state.gestation || !item.gestation) {
        return;
      }
      img.push(item)
    });
    img = (this.state.date === true) ? img.reverse() : img;
    const checkbox = checked.map((item, index) => {
      return <div key={index} onChange={() => this.toggle(index)} >
        < Checkbox name={item.name} id={item.id} index={index} checked={this.state.checkboxState} />
      </div>
    });
    const radio1 = radio.map((item, index) => {
      return <div key={index} onChange={() => this.toggleRadio(index)}>
        < Radio name={item.name} id={item.id} index={index} checked={this.state.radioState} />
      </div>
    });
    return <section className="gallery">
      <div className="page-content-L">
        <div className='content-wrapper1'>
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
        </div>
        < Foto img={img} />
      </div>
    </section>;
  }
}

export { Gallery };