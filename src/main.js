import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

//vuetify config
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css';
Vue.use(Vuetify)

import { store } from './store/store'
const vuetify = new Vuetify();

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
