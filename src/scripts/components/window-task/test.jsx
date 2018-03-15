import React, { Component } from 'react'

class Test extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return <div>
      <p>{this.props.item}</p>
    </div>
  }
}

export { Test };