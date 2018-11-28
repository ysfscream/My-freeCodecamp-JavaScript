import d3Gauge from './liquidFillGauge.js'

const render = (dom) => {
  const app = document.querySelector('body')
  app.innerHTML = dom
}

const initSvg = () => {
  var config1 = d3Gauge.liquidFillGaugeDefaultSettings()
  config1.circleColor = "#FF7777"
  config1.textColor = "#FF4444"
  config1.waveTextColor = "#FFAAAA"
  config1.waveColor = "#FFDDDD"
  config1.circleThickness = 0.2
  config1.textVertPosition = 0.2
  config1.waveAnimateTime = 1000
  d3Gauge.loadLiquidFillGauge("fillgauge", 78, config1)
}

export {
  render,
  initSvg,
}