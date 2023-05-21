import Vue from 'vue'
import App from './App.vue'

//vuetify config
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css';
Vue.use(Vuetify)

const vuetify = new Vuetify();

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
