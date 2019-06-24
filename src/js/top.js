import Vue from 'vue';
import marked from './marked';

new Vue({
  el: '#app',
  data: {
    inputStr: '',
    outputStr: '',
  },
  watch: {
    inputStr: function (str) {
      this.outputStr = marked(str);
    },
  },
  created: function () {
    console.log('Hello, Vue.js');
  },
  methods: {
    copyTextarea: function (ev) {
      ev.target.select();
      document.execCommand('copy');
    },
  },
});
