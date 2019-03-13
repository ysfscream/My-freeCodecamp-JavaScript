import React from 'react';

const Square = (props) => {
  const handleClick = () => {
    return props.onClick()
  }
  let isActive = false
  if (props.winnerLines) {
    isActive = props.winnerLines.includes(props.active)
  }
  return (
    <button
      className={`square ${isActive ? 'is-active': ''}`}
      onClick={handleClick}>
      {props.value}
    </button>
  )
}

export default Square;
