import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    inputStr: '',
    outputStr: '',
  },
  watch: {
    inputStr: function (str) {
      this.outputStr = str;
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
