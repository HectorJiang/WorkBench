import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
// import axios from 'axios'
import "./assets/index.scss";
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:8000'

new Vue({
    router,
    store,
    render: h => h(App)
    // es5写法
    // render: function(createElement) {
    //     return createElement(App)
    // }
    //es6写法
    // render:createElement=>createElement(App)
}).$mount('#app')