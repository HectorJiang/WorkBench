import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
import axios from 'axios'
import "./assets/index.scss";
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Clipboard from 'v-clipboard'

Vue.use(ElementUI);
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'https://jiangyongxu.club/api/blog'
// 复制组件
Vue.use(Clipboard)

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