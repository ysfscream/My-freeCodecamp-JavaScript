/* eslint-disable */
import './style.scss'

const getChannelInfo = () => {
  const channels = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff']
  channels.forEach(function (channel, index) {
    const makeURL = (type, name) => {
      return `https://wind-bow.gomix.me/twitch-api/${type}/${name}?callback=?`
    }
    $.getJSON(makeURL('streams', channel), function () {
      $.getJSON(makeURL('channels', channel), function (data) {
        const content = document.querySelector('.card-content .content')
        const status = data.status ? 'online' : 'offline'
        content.innerHTML += `<div status="${status}" class="item" id="item-${index}">
          <img class="image" src="${data.logo}" alt="">
          <div class="flag ${status}"></div>
          <a class="link" href="${data.url}" target="_blank">${data.name}</a>
          <p class="description">
            ${!data.status ? 'offline' : data.status}
          </p>
        </div>`
        scorllText()
      })
    })
  })
}

const scorllText = () => {
  const items = document.querySelectorAll('.item')
  const scorllFunc = (id, oper) => {
    const p = document.querySelector(`#${id} .description`)
    if (oper === 'start') {
      p.classList.add('des-animate')
    } else if (oper === 'stop') {
      p.classList.remove('des-animate')
    }
  }
  items.forEach((item) => {
    item.onmouseover = () => {
      scorllFunc(item.id, 'start')
    }
    item.onmouseout = () => {
      scorllFunc(item.id, 'stop')
    }
  })
}

const selectStatus = (id) => {
  const items = document.querySelectorAll('.item')
  items.forEach((item) => {
    const status = item.getAttribute('status')
    if (id === status || id === 'all') {
      item.classList.remove('disabled')
    } else {
      item.classList.add('disabled')
    }
  })
}

const changeTab = () => {
  const tabs = document.querySelectorAll('.card-footer-item')
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const active = document.querySelector('.is-active')
      active.classList.remove('is-active')
      tab.classList.add('is-active')
      selectStatus(tab.id)
    })
  })
}

getChannelInfo()
changeTab()
