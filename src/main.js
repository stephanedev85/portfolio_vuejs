import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import VueTelInput from 'vue-tel-input'



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