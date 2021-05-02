<template>
  <div id="app">
    <home-header></home-header>
    <home-content></home-content>

    <div class="container">
      <h2><span>KOLperation 可以為您做什麼？</span></h2>  
      <intro-swiper></intro-swiper>
    </div>
    
    <div id="fb-root"></div>
    <div class="fb-customerchat"
        attribution="page_inbox"
        page_id="107749514786487">
    </div>
    
    <home-footer></home-footer>

  </div>
</template>

<script>
// Components
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

// Facebook Chat Plugin
  window.fbAsyncInit = function () {
      FB.init({
          xfbml: true,
          version: 'v10.0'
      });
  };

  (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
        

</script>
