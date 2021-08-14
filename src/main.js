import Vue from 'vue'
import App from './App.vue'
import {setupDevtools} from './devtools'

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
})

app.$mount('#app')
setupDevtools(app)


