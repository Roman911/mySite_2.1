import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import { taskListStore } from '../../stores/taskList.store';

class CounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      totalTaskCount: 0
    }
  }

  componentDidMount() {
    taskListStore.subscribe('dataChanged', (tasks) => {
      this.setState((state) => {
        state.totalTaskCount = tasks.length;
        return state
      })
    });
  }

  render () {
    return <h1>{this.state.totalTaskCount}</h1>
  }
}

export {CounterComponent};