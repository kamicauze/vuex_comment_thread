import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import _ from 'lodash';
   
Object.defineProperty(Vue.prototype, '$_', { value: _ });
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
