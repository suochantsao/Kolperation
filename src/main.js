// Frameworks and other tools
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Router


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
import { faAddressCard,
         faGamepad,
         faVideo,
         faBasketballBall,
         faUtensils,
         faDesktop,
         faGlasses,
         faBuilding,
         faPaw,
         faPhotoVideo,
         faBriefcase,
         faTimes,
         faUser,
         faLock,
         faUsers,
         faEnvelope,
         faPhone,
         faCashRegister,
         faIdCardAlt,
         faBars,
         faHeart,
         faCalendarCheck,
         faCog,
         faSignOutAlt,
         faListUl,
         faCheckCircle,
         faCommentDots,
         faEnvelopeOpenText,
         faCommentDollar,
         faCheckSquare,
         faSearch,
         

       } from '@fortawesome/free-solid-svg-icons'

library.add(
  faAddressCard, 
  faGamepad,
  faVideo,
  faBasketballBall,
  faUtensils,
  faDesktop,
  faGlasses,
  faBuilding,
  faPaw,
  faPhotoVideo,
  faBriefcase,
  faTimes,
  faUser,
  faLock,
  faUsers,
  faEnvelope,
  faPhone,
  faCashRegister,
  faIdCardAlt,
  faBars,
  faHeart,
  faCalendarCheck,
  faCog,
  faSignOutAlt,
  faListUl,
  faCheckCircle,
  faCommentDots,
  faEnvelopeOpenText,
  faCommentDollar,
  faCheckSquare,
  faSearch
)
Vue.component('fa-icon',FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
