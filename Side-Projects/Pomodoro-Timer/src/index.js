import './style.styl'
import html from './index.pug'
import d3Gauge from './liquidFillGauge.js'
import { render, setTime, sessionCount } from './common'

render(html)

const gaugeConfig = d3Gauge.liquidFillGaugeDefaultSettings()
gaugeConfig.circleColor = '#FF7777'
gaugeConfig.textColor = '#FF4444'
gaugeConfig.waveTextColor = '#FFAAAA'
gaugeConfig.waveColor = '#FFDDDD'
gaugeConfig.circleThickness = 0.1
gaugeConfig.textVertPosition = 0.4
gaugeConfig.waveAnimateTime = 800
gaugeConfig.valueCountUp = false
const gauge = d3Gauge.loadLiquidFillGauge('fillgauge', 100, gaugeConfig)

let sessionTime = document.querySelector('.session-time')
let breakTime = document.querySelector('.break-time')
let timeout = document.querySelector('.timeout')
const plusBtns = document.querySelectorAll('.plus-btn')
const minusBtns = document.querySelectorAll('.minus-btn')
const startBtn = document.querySelector('.start-btn')

plusBtns[0].addEventListener('click', () => {
  breakTime.value = setTime(parseInt(breakTime.value, 10), 1, '+')
})
minusBtns[0].addEventListener('click', () => {
  breakTime.value = setTime(parseInt(breakTime.value, 10), 1, '-')
})
plusBtns[1].addEventListener('click', () => {
  sessionTime.value = setTime(parseInt(sessionTime.value, 10), 1, '+')
})
minusBtns[1].addEventListener('click', () => {
  sessionTime.value = setTime(parseInt(sessionTime.value, 10), 1, '-')
})

startBtn.addEventListener('click', () => {
  startBtn.disabled = true
  let timer = sessionTime.value * 60
  const interVal = setInterval(() => {
    const res = sessionCount(timer)
    timeout.textContent = res.content
    timer = res.timer
    const updateNum = Math.round((timer / (sessionTime.value * 60)) * 100)
    gauge.update(updateNum)
    timer -= 1
    if (timer < 0) {
      timer = sessionTime.value * 60
      clearInterval(interVal)
    }
  }, 1000)
})

if (module.hot) { // 热更新该模块
  module.hot.accept()
}
