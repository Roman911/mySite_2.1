import React, { Component } from 'react';

class Tags extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <p>{this.props.tag}</p>
    </div>
  }
}

export { Tags };