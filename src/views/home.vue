<template>
  <div id="app">
    <home-header></home-header>
    <home-content></home-content>

    <div class="container">
      <h2><span>KOLperation 可以為您做什麼？</span></h2>  
      <intro-swiper></intro-swiper>
    </div>

    <home-footer></home-footer>

  </div>
</template>

<script>
import homeHeader  from '../components/home-header.vue'
import homeContent from '../components/home-content.vue'
import homeFooter  from '../components/home-footer.vue'
import IntroSwiper from '../components/Intro-swiper.vue'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeContent,
    homeFooter,
    IntroSwiper
  }
}

</script>
