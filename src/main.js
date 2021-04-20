// Frameworks and other tools
import Vue from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

// Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, {Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

Vue.use(VueAwesomeSwiper);
swiper.use([Navigation,Pagination,Autoplay]);

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
Vue.component('fa-icon',FontAwesomeIcon)

// Global Variable
import login from './views/Login.vue'
Vue.prototype.GLOBAL = login

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
