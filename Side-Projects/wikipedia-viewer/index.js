/* eslint-disable */

import './style.css'

const title = '123'

const searchForm = {
	url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=',
	value: 'Hello World!',
}

const input = document.getElementById('search-input')
const modelValue = input.getAttribute('model')
if (modelValue) {
	input.value = eval(modelValue)
}
Object.defineProperty(searchForm, 'value',{
	get() {
		return document.getElementById('search-input').value
	},
	set(newVal) {
		document.getElementById('search-input').value = newVal
	}
})

const searchButton = document.getElementById('search-button')
const searchButtonMobile = document.getElementById('search-button__mobile')
const searchPage = document.querySelector('.search-page')
const searchResult = document.querySelector('.search-result')

const searchWiki = (that) => {
	searchButton.classList.add('is-loading')
	const requestUrl = `${searchForm.url}${searchForm.value}`
	$.ajax({
		url: requestUrl,
    type: "GET",
    dataType: "jsonp", //指定服务器返回的数据类型
    success: (data) => {
    	const res = []
      const pages = data.query.pages
      Object.keys(pages).forEach((key) => {
      	res.push(pages[key])
      })
      res.forEach((item) => {
      	item.fullUrl = `https://en.wikipedia.org/wiki/${item.title}`
      	console.log(item)
      	searchResult.innerHTML += `<div class="column animated bounceInUp">
          <div class="box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <h3>${item.title}</h3>
                  <p>${item.extract}</p></div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item" aria-label="reply" href=${item.fullUrl} target="_blank">
                      <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>`
      })
      searchPage.style = 'display: none'
      searchResult.style = 'display: grid'
      searchButton.classList.remove('is-loading')
    }
	})
}

searchButton.addEventListener('click', searchWiki)
searchButtonMobile.addEventListener('click', searchWiki)
