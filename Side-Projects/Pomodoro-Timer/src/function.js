const render = (dom) => {
  const app = document.querySelector('body')
  app.innerHTML = dom
}

export {
  render
}