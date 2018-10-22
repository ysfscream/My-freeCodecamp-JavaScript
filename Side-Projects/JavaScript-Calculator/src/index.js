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
        isMinus: false,
        btnList: ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='],
        calculator: {
          displayNum: '0',
          oper: ''
        }
      }
    },
    watch: {
      'calculator.displayName': 'displayNumChanged'
    },
    methods: {
      displayNumChanged() {
        this.calculator.displayNum.length >= 7 ? this.isLarge = false : this.isLarge = true
        return this.calculator.displayNum.length < 11
      },
      inputBtnValue(value) {
        if (typeof value === 'number' || value === '.') {
          this.displayNum(value.toString())
        } else if (value === '+/-') {
          this.calculator.displayNum = this.changeSymbol(this.calculator.displayNum) || '0'
        } else if (value === 'AC') {
          this.clearInput()
        } else if (value === '=') {
          this.calculateRes()
        } else {
          this.inputBtnOper()
        }
      },
      displayNum(strVal) {
        if (!this.displayNumChanged()) {
          return
        }
        if (this.calculator.displayNum === '0' && strVal !== '.') {
          this.calculator.displayNum = strVal
        } else {
          this.calculator.displayNum += strVal
        }
      },
      inputBtnOper() {},
      clearInput() {
        this.calculator.displayNum = '0'
      },
      calculateRes() {},
      changeSymbol(strVal) {
        if (strVal === '0') {
          return false
        }
        this.isMinus = !this.isMinus
        return this.isMinus ?
          `-${strVal}`
          : `${strVal}`.replace('-', '')
      }
    }
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
