<template>
    <div id="app">
        <home-header></home-header>

        <div class="container trialContent">
            <h2><span>合作案件搜尋</span></h2>  
            <span class="titleDescrip">請選擇您想要合作的平台媒體</span>

            <ul class="socialBlock">
                <li class="socialItem">
                    <img width="100%" src="../assets/img/facebook.svg" alt="">
                    <span>Facebook</span>
                </li>
                <li class="socialItem">
                    <img width="100%" src="../assets/img/instagram.svg" alt="">
                    <span>instagram</span>
                </li>
                <li class="socialItem">
                    <img width="100%" src="../assets/img/youtube.svg" alt="">
                    <span>Youtuber</span>
                </li>
            </ul>

            <a href="#" class="txtBlue"><span class="nxtBtn">下一步</span></a>
        </div>

        <home-footer></home-footer>
    </div>
</template>

<script>
import homeHeader  from '../components/home-header.vue'
import homeFooter  from '../components/home-footer.vue'

export default {
    name: 'trial',
    components: {
        homeHeader,
        homeFooter
    }
}
</script>

