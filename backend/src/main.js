import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import echarts from 'echarts'
import axios from 'axios'

// import "./assets/index.scss";
Vue.config.productionTip = false

Vue.use(ElementUI);

// Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'https://jyx.plus'


// 修改页面标题，对应router.js中meta.title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
  // es5写法
  // render: function(createElement) {
  //     return createElement(App)
  // }
  //es6写法
  // render:createElement=>createElement(App)
}).$mount('#app')