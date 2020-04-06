import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
import axios from 'axios'
import "./assets/index.scss";


Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:8000'

// 修改页面标题，对应router.js中meta.title
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }
  next()
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')