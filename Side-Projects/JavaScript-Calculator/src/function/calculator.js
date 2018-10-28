export default {
  el: '#app',
  data() {
    return {
      isLarge: true,
      isMinus: false,
      newNum: false,
      btnList: ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='],
      calculator: {
        displayNum: '0',
        oldDisplayNum: undefined,
        oper: ''
      }
    }
  },
  watch: {
    'calculator.displayNum': 'displayNumChanged'
  },
  methods: {
    displayNumChanged() {
      this.calculator.displayNum.length >= 7 ? this.isLarge = false : this.isLarge = true
      return this.calculator.displayNum.length < 11
    },
    inputBtnValue(value) {
      if (typeof value === 'number') {
        this.displayNum(value.toString())
      } else if (value === '.') {
        if (this.calculator.displayNum.split('.').length > 1) {
          return
        }
        this.displayNum(value)
      } else if (value === '+/-') {
        this.calculator.displayNum = this.changeSymbol(this.calculator.displayNum) || '0'
      } else if (value === 'AC') {
        this.clearInput()
      } else if (value === '=') {
        this.newNum = true
        this.calculateRes()
      } else {
        this.inputBtnOper(value)
      }
    },
    displayNum(strVal) {
      if (!this.displayNumChanged()) {
        return
      }
      if ((this.calculator.displayNum === '0' && strVal !== '.')
        || this.newNum) {
        if (strVal === '.' && this.newNum && this.calculator.displayNum !== '0') {
          this.calculator.displayNum = `0${strVal}`
        } else {
          this.calculator.displayNum = strVal
        }
        this.newNum = false
        this.calculator.oper === ''
      } else {
        this.calculator.displayNum += strVal
      }
    },
    inputBtnOper(oper) {
      this.newNum = true
      if (this.calculator.oldDisplayNum) {
        this.calculateRes()
      }
      this.calculator.oldDisplayNum = this.calculator.displayNum
      this.calculator.oper = oper
    },
    clearInput() {
      this.newNum = false
      this.calculator.oldDisplayNum = undefined
      this.calculator.displayNum = '0'
    },
    calculateRes() {
      if (this.calculator.oper === '=') {
        return
      }
      let res = 0
      const oldVal = parseFloat(this.calculator.oldDisplayNum, 10)
      const newVal = parseFloat(this.calculator.displayNum, 10)
      switch (this.calculator.oper) {
        case '+':
          res = oldVal + newVal
          break
        case '-':
          res = oldVal - newVal
          break
        case 'x':
          res = oldVal * newVal
          break
        case '÷':
          res = oldVal / newVal
          break
        case '%':
          res = oldVal % newVal
          break
        default:
          res = 0
      }
      this.calculator.displayNum = res.toString()
      this.calculator.oldDisplayNum = undefined
      this.newNum = true
    },
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
}
