// Frameworks and other tools
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, {Navigation, Pagination, Autoplay } from 'swiper'
import App from './App.vue'
import router from './router'

// CSS
import 'swiper/swiper-bundle.min.css'

// Swiper
Vue.use(VueAwesomeSwiper);
swiper.use([Navigation,Pagination,Autoplay]);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
