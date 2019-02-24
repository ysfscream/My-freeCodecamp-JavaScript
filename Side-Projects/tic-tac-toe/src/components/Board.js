import Square from './Square';
import React, { Component } from 'react';

class Board extends Component {
  renderSquare(index) {
    return <Square key={index} value={index} />
  }

  renderGrid(n) {
    const layouts = []
    for (let i = 1; i <= n; i+=1) {
      layouts.push(this.renderSquare(i))
    }
    return (
      <div className="board-wrap">
        {layouts}
      </div>
    )
  }

  render() {
    const status = 'Next player: X'
    return (
      <div className="board">
        <div className="status">{status}</div>
        {this.renderGrid(9)}
      </div>
    )
  };
};

export default Board;
