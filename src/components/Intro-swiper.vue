<template>
  <swiper class="swiper" :options="swiperOption">

    <swiper-slide>
      <img width="78%" src="https://blush.design/api/download?shareUri=PbD7Au4vBo8oHUjr&c=Hair_0%7E9b5120-0.1%7E0f0f0f-0.3%7Effc943_Skin_0%7Eecafa3-0.1%7Ec26e5e-0.3%7E7d4439&w=800&h=800&fm=png">
      <span class="servTitle">精準搜尋</span>
      <span class="servDescrip">找到您最想要合作的業主和案件</span>
    </swiper-slide>

    <swiper-slide>
      <img width="81.5%" src="https://blush.design/api/download?shareUri=BbcRWaXXiZdEPp7K&c=Hair_0%7E711515-0.2.5.2.0%7E0f0f0f-0.2.6.2.0%7Effc943-0.2.7.2.0%7E878787-0.2.8.2.0%7E711515-0.3%7Ec38741_Skin_0%7Ec26e5e-0.2.5.2.0%7Eecafa3-0.2.6.2.0%7Ec26e5e-0.2.7.2.0%7Ef6cbc3-0.2.8.2.0%7Ef6cbc3-0.3%7Eecafa3&w=800&h=800&fm=png">
      <span class="servTitle">輕鬆接案</span>
      <span class="servDescrip">隨時隨地都可以接案與洽談</span>
    </swiper-slide>
    
    <swiper-slide>
      <img width="84.3%" src="https://blush.design/api/download?shareUri=r30q4FiuVNVRP6DV&c=Hair_0%7E711515-0.1%7E711515-0.4%7E0f0f0f_Skin_0%7Ec26e5e-0.1%7E7d4439-0.4%7Ef6cbc3&w=800&h=800&fm=png">
      <span class="servTitle">快速配對</span>
      <span class="servDescrip">節省雙方來回溝通的時間 馬上接到案</span>
    </swiper-slide>

    <swiper-slide>
      <img width="85.5%" src="https://blush.design/api/download?shareUri=ugA9LYv5WactzV74&c=Hair_0%7E878787-0.4%7E878787_Skin_0%7Ec26e5e-0.4%7Eecafa3&bg=ffffff&w=800&h=800&fm=png">
      <span class="servTitle">洽談成功</span>
      <span class="servDescrip">提供過往洽談成功數據 提高合作機會</span>
    </swiper-slide>

    <swiper-slide>
      <img width="97.5%" src="https://blush.design/api/download?shareUri=6uxBnPOwWK8BqiM9&c=Hair_0%7E878787-0.2%7Ec38741_Skin_0%7Ef6cbc3-0.2%7Ec26e5e&w=800&h=800&fm=png">
      <span class="servTitle">站內詢問</span>
      <span class="servDescrip">紀錄雙方洽談紀錄 合作細項不遺漏</span>
    </swiper-slide>

    <swiper-slide>
      <img width="92.5%" src="https://blush.design/api/download?shareUri=85PTFTiw9UXgBR0s&c=Hair_0%7Ec38741-0.8%7E0f0f0f_Skin_0%7Eecafa3-0.8%7Ec26e5e&w=800&h=800&fm=png">
      <span class="servTitle">多種平台</span>
      <span class="servDescrip">從FB和IG到Youtube和Podcast都有</span>
    </swiper-slide>

    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'intro-swiper',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: -30,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style scoped>
.swiper{
  /* border:pink solid 1px; */
  margin: 6% auto 4% auto;
  padding-left: 3%;
  max-width: 1000px;
  height: 500px;
}
span{
  display: block;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-left: 18%;
  letter-spacing: 0.1rem;
  /* border: 1px solid pink; */

}
.servDescrip{
  font-size: 1rem;
}
.servTitle{
  background-color: white;  
  font-weight: bolder;
}

</style>