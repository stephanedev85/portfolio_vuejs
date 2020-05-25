import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'






Vue.use(Vuetify)



const vuetify = new Vuetify()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')