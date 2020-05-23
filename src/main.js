require('dotenv').config();
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueTelInput from 'vue-tel-input'

console.log(process.env)


Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_KEY,
    libraries: 'places'
  }
})

Vue.use(Vuetify)
Vue.use(VueTelInput)

const vuetify = new Vuetify()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  VueTelInput,
  vuetify,
  router
}).$mount('#app')
