import * as React from 'react';// eslint-disable-line
import { Component } from 'react';

class TaskComponent extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render () {
    const title = this.props.task.title;
    const isCompleted = this.props.task.completed;

    return <div className='task edit'>
      <img src={require("../../../../assets/images/accessories_large_2x.jpg")} alt=''/>
      <input type='checkbox' checked={isCompleted} onChange={() => {}} />
      <span className='task__title'>
        <span className='task__title-text'>{title}</span>
        <input className="task__title-input" type='text' />
      </span>
    </div>
  }
}

export {TaskComponent};
