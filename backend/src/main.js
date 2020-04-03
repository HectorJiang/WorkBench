import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
// import VuePrism from 'vue-prism'
// import 'prismjs/themes/prism.css'
// import Prism from "prismjs"; //引入插件
// import hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css'
import axios from 'axios'
import "./assets/index.scss";
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:8000'

// Vue.directive('highlight',function (el) {
//   let blocks = el.querySelectorAll('pre code');
//   blocks.forEach((block)=>{
//     hljs.highlightBlock(block)
//   })
// })

// Prism.highlightAll()
// Vue.use(VuePrism)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')