<template>
  <div id="app">
    <header>
      <h1>
        <img class="logo" src="../assets/img/logo.svg">
        <span class="brandName">Kolperation</span>
      </h1>
      <li>平台試用</li>
      <li class="specBtn">註冊/登入</li>
    </header>

    <nav>
      <ul>
        <li class="servDescrip">
          幫您找業配
          <span>讓業主與KOL輕鬆配對的媒合平台</span>
          <span class="btn">立即體驗</span>
          <span class="btn specBtn">註冊 / 登入</span>
        </li>
        <li>
          <img src="https://blush.design/api/download?shareUri=GNi9hwRrvV3jnfI9&c=Hair_0%7E878787-0.2%7Effc943_Skin_0%7E7d4439-0.2%7Ef6cbc3&bg=e6e6e6&w=800&h=800&fm=png">
        </li>
      </ul>
    </nav>

    <div class="container">
      <h2>
        <span>Kolperation 可以為您做什麼？</span>
      </h2>  
      <intro-swiper></intro-swiper>
    </div>

    <footer>
      <ul class="container">
        <li class="footLogo">
          <span class="footTitle">Kolperation</span>
          <span>讓業主與KOL輕鬆配對的媒合平台</span>
        </li>
        <li class="footItems">
          <span>關於品牌</span>
          <span>聯絡我們</span>
        </li>
        
      </ul>
    </footer>

  </div>
</template>

<script>
import IntroSwiper from '../components/Intro-swiper.vue'

export default {
  name: 'home',
  components: {
    IntroSwiper
  }
}

</script>
