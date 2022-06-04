import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import './style.css';
import './element-ui';
// ele
Vue.prototype.$bus= new Vue()
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')