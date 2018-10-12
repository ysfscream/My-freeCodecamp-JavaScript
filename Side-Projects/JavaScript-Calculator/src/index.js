import './assets/style/style.scss'
import main from './views/main.html'

const renderDOM = (main) => {
  const app = document.getElementById('app')
  app.innerHTML = main
}
renderDOM(main)

const vue = () => {
  return new Vue({
    el: '#app',
    data() {
      return {
        isLarge: true,
        cal: {
          displayNum: '999',
        }
      }
    },
    watch: {
      'cal.displayName': 'displayNumChanged'
    },
    methods: {
      displayNumChanged() {
        if (this.cal.displayNum.length >= 7) {
          this.isLarge = false
        } else {
          this.isLarge = true
        }
      },
    },
  })
}
vue()

if (module.hot) { // 热更新该模块
  module.hot.accept()
  module.hot.accept('./views/main.html', () => {
    renderDOM(main)
    vue()
  })
}
