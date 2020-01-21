import Vue from 'vue';
import App from './App.vue';
import request from './plugins/request';

Vue.config.productionTip = false;

Vue.use(request);

new Vue({
  render: h => h(App),
}).$mount('#app');
