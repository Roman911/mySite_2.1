import React, { Component } from 'react';
import { Foto } from "./foto.jsx";
import { task } from "./../window-task/task.js";
import { taskRadio } from "./../window-task/task-radio.js";
import { tags } from "../window-task/tags.js";
import { imgItems } from './foto.js'
import { Checkbox } from "./../window-task/checkbox.jsx";
import { Radio } from "./../window-task/radio.jsx";
import { Tags } from "../window-task/tags.jsx";
import './gallery.styl';
import './../window-task/window-task.styl';

const checked = task.slice();
const radio = taskRadio.slice();

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portrait: false,
      children: false,
      family: false,
      gestation: false,
      date: false,
      showed: false,
      show: false,
      currentIndex: null,
      tag: null
    };
    this.toggle = this.toggle.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  toggle(id) {
    this.setState({tag: null, currentIndex: null});
    if (id === 0) {
      this.setState({portrait: !this.state.portrait});
    } else if (id === 1) {
      this.setState({children: !this.state.children});
    } else if (id === 2) {
      this.setState({family: !this.state.family});
    } else if (id === 3) {
      this.setState({gestation: !this.state.gestation});
    }
  }

  toggleRadio() {
    this.setState({date: !this.state.date});
    this.setState({show: !this.state.show})
  }

  addClass() {
    if (window.pageYOffset < 350) {
      this.setState({ showed: false });
    } else {
      this.setState({ showed: true });
    }
  }

  tag(tag, index) {
    this.setState({portrait: false, children: false, family: false, gestation: false});
    if (this.state.tag === tag) {
      this.setState({tag: null, currentIndex: null});
    } else {
      this.setState({tag: tag, currentIndex: index});
    }
  }

  render() {
    const onsc = addEventListener('scroll', this.addClass);
    let img = [];
    imgItems.map((item) => {
      if (this.state.tag || this.state.portrait || this.state.children || this.state.family || this.state.gestation || !item.imgUrl) {
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
      img.push(item);
    });
    imgItems.map((item) => {
      if (item.tag !== this.state.tag || !item) {
        return;
      }
      img.push(item);
    });
    img = this.state.date ? img.reverse() : img;
    const checkbox = checked.map((item, index) => {
      return <div key={index} onChange={() => this.toggle(index)} >
        < Checkbox name={item.name} index={index} />
      </div>
    });
    const radio1 = radio.map((item, index) => {
      return <div key={index} onChange={() => this.toggleRadio()}>
        < Radio name={item.name} index={index} show={this.state.show} />
      </div>
    });
    const tag = tags.map((item, index) => {
      return <div className='tags' key={index} onClick={() => this.tag(item.tag, index)} >
        <Tags
          tag={item.tag}
          show={this.state.currentIndex === index}
        />
      </div>
    });
    return <section className="gallery">
      <div className="page-content-L">
        <div className='content-wrapper1'>
          <div className='window-task'>
            <div className="window-header">
              <p>Select</p>
            </div>
            <div className='window-control'>
              <p>Categories</p>
              { checkbox }
            </div>
            <div className='window-control'>
              <p>Date</p>
              { radio1 }
            </div>
          </div>
          <div className='window-tags'>
            <div className="window-header">
              <p>Tags:</p>
            </div>
            <div className='window-content'>
              { tag }
            </div>
          </div>
        </div>
        < Foto img={img} />
      </div>
    </section>;
  }
}

export { Gallery };