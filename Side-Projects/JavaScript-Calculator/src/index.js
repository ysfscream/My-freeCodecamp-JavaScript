import './assets/style/style.scss'
import main from './views/main.html'
import calculator from './function/calculator.js'

const renderDOM = (dom) => {
  const app = document.getElementById('app')
  app.innerHTML = dom
}
renderDOM(main)

const vue = () => {
  return new Vue(calculator)
}
vue()

if (module.hot) { // 热更新该模块
  module.hot.accept()
  module.hot.accept('./views/main.html', () => {
    renderDOM(main)
    vue()
  })
}
