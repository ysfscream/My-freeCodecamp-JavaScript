const render = (dom) => {
  const app = document.querySelector('body')
  app.innerHTML = dom
}

const setTime = (oldValue, newValue, oper) => {
  switch (oper) {
    case '+':
      return oldValue === 60 ? oldValue : (oldValue + newValue)
    case '-':
      return oldValue === 1 ? oldValue : (oldValue - newValue)
    default:
      return 0
  }
}

const sessionCount = (timer) => {
  let minutes = parseInt(timer / 60, 10)
  let seconds = parseInt(timer % 60, 10)
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds
  return {
    content: `${minutes} : ${seconds}`,
    timer,
  }
}

const breakCount = () => {
}

export { render, setTime, sessionCount, breakCount }
