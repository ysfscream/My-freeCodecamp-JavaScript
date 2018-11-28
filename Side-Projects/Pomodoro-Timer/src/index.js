import './style.styl'
import html from './index.pug'
import { render, initSvg } from './function'

render(html)

initSvg()

if (module.hot) { // 热更新该模块
  module.hot.accept()
}
