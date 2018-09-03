new Vue({
	el: '#app',
	data: function data() {
		return {
			quotes: {
				quote: '',
				author: '',
				cat: '' },

			author: '',
			loading: false };

	},
	methods: {
		randomNum: function randomNum() {
			return Math.round(Math.random() * 100);
		},
		loadQuotas: function loadQuotas() {var _this = this;
			this.loading = true;
			var num = this.randomNum();
			fetch('https://talaikis.com/api/quotes/').
			then(function (res) {
				if (res.status === 200) {
					res.json().then(function (data) {
						Object.assign(_this.quotes, data[num]);
						_this.loading = false;
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		openURL: function openURL() {
			var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.quotes.quote + '" ' + this.quotes.author);
			window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
		} },

	created: function created() {
		this.loadQuotas();
	} });