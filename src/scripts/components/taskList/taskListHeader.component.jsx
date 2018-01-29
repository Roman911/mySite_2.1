import * as React from 'react';// eslint-disable-line
import { Component } from 'react';


class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  addTask() {
    this.props.onAdd(this.state.title);
    this.setState((state) => {
      state.title = '';
      return state;
    })
  }

  onChangeHandler(event) {
    const title = event.target.value;
    this.setState((state) => {
      state.title = title;
      return state;
    });
  }

  render() {
    return <header className='task-list__header'>
      <input type='text' onChange={this.onChangeHandler.bind(this)} value={this.state.title}/>
      <button onClick={this.addTask.bind(this)}>Add</button>
    </header>;
  }
}

export { HeaderComponent };

