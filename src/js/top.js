import Vue from 'vue';

window.onload = () => {
  $('.output').html('出力部<br>');
  console.log('hoge');
};

new Vue({
  el: '#app',
  data: {
    testString: 'testです',
  },
  watch: {
  },
  created: function () {
    console.log('Hello, Vue.js');
  },
});
