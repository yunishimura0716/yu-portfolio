import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MaterialKit from './material-kit';
import VWave from 'v-wave'

Vue.config.productionTip = false

Vue.use(MaterialKit);
Vue.use(VWave);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
