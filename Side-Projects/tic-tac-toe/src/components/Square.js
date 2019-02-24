import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  handleClick(value) {
    console.log(value)
    this.setState({
      value,
    });
  }
  render() {
    return (
      <button
        className="square"
        onClick={this.handleClick.bind(this, this.props.value)}>
        {this.state.value}
      </button>
    )
  };
};

export default Square;
