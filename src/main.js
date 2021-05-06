// Frameworks and other tools
import Vue from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Signal R
// import jq from 'jquery';
// window.$ = jq;
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;
// window.$ = window.jQuery = require("jquery")


// VueForm multiselect
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
Vue.component('fa-icon',FontAwesomeIcon)

// Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, {Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

Vue.use(VueAwesomeSwiper);
swiper.use([Navigation,Pagination,Autoplay]);

// SweetAlert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
