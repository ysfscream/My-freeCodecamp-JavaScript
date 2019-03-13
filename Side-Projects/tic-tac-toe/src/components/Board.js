import React from 'react'
import Square from './Square'

const Board = (props) => {
  const renderSquare = (index) => {
    return (
      <Square
        key={index}
        value={props.squares[index]}
        active={index}
        winnerLines={props.winnerLines}
        onClick={() => props.onClick(index)}
      />
    )
  }
  const renderGrid = (n) => {
    const layouts = []
    for (let i = 0; i < n; i += 1) {
      layouts.push(renderSquare(i))
    }
    return (
      <div className='board-wrap'>
        {layouts}
      </div>
    )
  }
  return (
    <div className='board'>
      {renderGrid(9)}
    </div>
  )
}

export default Board
