import Vue from 'vue'
import App from './App.vue'


import router from './router/router'


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})





