// Frameworks and other tools
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// CSS
import 'swiper/swiper-bundle.min.css'

// Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, {Navigation, Pagination, Autoplay } from 'swiper'
Vue.use(VueAwesomeSwiper);
swiper.use([Navigation,Pagination,Autoplay]);

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
  faCashRegister

)
Vue.component('fa-icon',FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
