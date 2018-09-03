Vue.component('danmuScreen', {
  template: '#danmu-screen',
  props: {
    message: Array } });



new Vue({
  el: '#app',
  data: function data() {
    return {
      dammuTitle: '欢迎来到吐槽墙',
      danmuWord: [],
      word: {
        text: '',
        color: '#ccc',
        top: '0px' } };


  },
  methods: {
    randNum: function randNum() {
      return Math.round(Math.random() * 5);
    },
    randColor: function randColor() {
      var color = ['#5BC0EB', '#FDE74C', '#9BC53D', '#E55934', '#747E8F', '#F0374D'];
      var i = this.randNum();
      return color[i];
    },
    randPos: function randPos() {
      var pos = ['20px', '50px', '100px', '150px', '200px', '250px'];
      var p = this.randNum();
      return pos[p];
    },
    sendWord: function sendWord() {var _word =
      this.word,text = _word.text,color = _word.color,top = _word.top;
      if (!this.word.text) {
        alert('Please enter some words');
      }
      color = this.randColor();
      top = this.randPos();
      this.danmuWord.push({
        text: text,
        color: color,
        top: top });

      this.word.text = '';
    },
    emptyWord: function emptyWord() {
      var childData = this.$refs.emptyWord.message;
      //拿到子组件的数据
      if (!childData.length) {
        alert('There is no data');
      }
      childData = [];
      //修改子组件的数据
      this.danmuWord = [];
    } } });