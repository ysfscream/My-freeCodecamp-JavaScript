var apiURL = 'https://fcc-weather-api.glitch.me/api/current';
// ?lat=25&lon=102 需要传入

// Promise 封装 ajax 的一个方法 Promise encapsulates a method of ajax
var ajaxFetch = {
	get: function get(url) {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve({
							status: 200,
							data: xhr.responseText },
						xhr);
					} else {
						reject({
							code: xhr.status,
							message: xhr.response },
						xhr);
					}
				}
			};
			xhr.send();
		});
	} };


new Vue({
	el: '#app',
	data: function data() {
		return {
			loading: true,
			visible: false,
			isCelsius: true,
			lat: '',
			long: '',
			weatherDes: '',
			weatherCity: '',
			weatherMain: {},
			weatherWind: '',
			weather: {
				Clouds: 'wi-cloud',
				Sunny: 'wi-day-sunny',
				Rain: 'wi-rain',
				Clear: 'wi-day-sunny' } };


	},
	methods: {
		changeTemp: function changeTemp() {
			this.isCelsius = !this.isCelsius;
			if (!this.isCelsius) {
				this.weatherMain.temp = (this.weatherMain.temp * 1.8 + 32).toFixed(2);
			} else {
				this.weatherMain.temp = ((this.weatherMain.temp - 32) / 1.8).toFixed(2);
			}
		},
		loadWeather: function loadWeather(long, lat) {var _this = this;
			ajaxFetch.get(apiURL + '?lat=' + lat + '&lon=' + long).then(function (res) {
				var weatherData = JSON.parse(res.data);
				_this.weatherDes = weatherData.weather[0].main;
				_this.weatherCity = weatherData.name;
				_this.weatherMain = weatherData.main;
				_this.weatherWind = weatherData.wind;
				_this.loading = false;
			}).catch(function (err) {
				alert(err.message);
			});
		},
		getPosition: function getPosition() {var _this2 = this;
			if (navigator.geolocation) {
				var success = function success(position) {var _position$coords =
					position.coords,longitude = _position$coords.longitude,latitude = _position$coords.latitude;
					var long = parseInt(longitude.toFixed(3));
					var lat = parseInt(latitude.toFixed(3));
					_this2.loadWeather(long, lat);
				};
				var error = function error(err) {
					var error = err.message;
					alert(error);
				};
				navigator.geolocation.getCurrentPosition(success, error);
			} else {
				alert('unposition');
			}
		} },

	created: function created() {
		this.getPosition();
	} });