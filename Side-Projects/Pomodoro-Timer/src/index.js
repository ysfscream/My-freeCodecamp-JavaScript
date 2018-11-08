import './style.styl'
import html from './index.pug'
import { render } from './function'

render(html)

if (module.hot) { // 热更新该模块
  module.hot.accept()
}
