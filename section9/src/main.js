import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
Vue.config.productionTip = false
Vue.component("LikeNumber" ,LikeNumber)
Vue.derective("border",{
  bind(){},
  inserted(){},
  update(){},
  componentUpdared(){},
  unbind(){},
})
new Vue({
  render: h => h(App),
}).$mount('#app')
