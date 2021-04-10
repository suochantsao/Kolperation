<template>
    <div id="app">
        <span class="titleDescrip">1. 請選擇您想要合作的平台媒體</span>

        <ul class="socialBlock contentBlock">
            <li class="socialItem selectItem">
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
        
        <router-link to="/trial/second" class="txtBlue"><span class="nxtBtn">下一步</span></router-link>
    </div>
</template>

<script>

export default {
    name: 'trial_first',
    components: {
    }
}
</script>

