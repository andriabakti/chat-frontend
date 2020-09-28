import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: `${process.env.VUE_APP_MAP_API}`,
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    /// / If you want to set the version, you can do so:
    // v: '3.26',
  }
})
Vue.use(VueGeolocation)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
