import Board from './Board';
import React, { Component } from 'react';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Board/>
      </div>
    )
  };
};

export default Game;
