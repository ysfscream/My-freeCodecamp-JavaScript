import Board from './Board'
import React, { Component } from 'react'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNum: 0,
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNum + 1)
    const current = history[this.state.stepNum]
    const squares = current.squares.slice()
    if (squares[i] || this.calculateWinner(current.squares)) {
      return false
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNum: history.length
    })
  }

  calculateWinner (arr) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return {
          winner: arr[a],
          winnerLines: [a, b, c]
        }
      }
    }
    return false
  }

  jumpTo(step) {
    this.setState({
      stepNum: step,
      xIsNext: !(step % 2),
    })
  }

  render () {
    const { history } = this.state
    const current = history[this.state.stepNum]
    const isTied = current.squares.every(item => item !== null)
    const { winner, winnerLines } = this.calculateWinner(current.squares)
    const nextTip = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    const winnerTip = `Winner is ${winner}`
    let status = winner ? winnerTip : nextTip
    if (isTied && !winner) {
      status = 'Ops! was tied, click Start'
    }
    const moves = history.map((item, index) => {
      const desc = index ? `Move #${index}` : 'Game Start'
      return (
        <li key={index}>
          <a href="javascript:;" onClick={() => this.jumpTo(index)}>{desc}</a>
        </li>
      )
    })

    return (
      <div className='game'>
        <div className='game-info'>
          <div>{status}</div>
        </div>
        <div className='game-board'>
          <Board
            winnerLines={winnerLines}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <ol>{moves}</ol>
      </div>
    )
  }
}

export default Game
