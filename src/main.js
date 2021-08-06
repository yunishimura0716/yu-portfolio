import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MaterialKit from './material-kit';
import VWave from 'v-wave'
import vuetify from './globalComponents/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, faNode);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(MaterialKit);
Vue.use(VWave);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
