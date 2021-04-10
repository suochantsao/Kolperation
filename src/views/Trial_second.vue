<template>
    <div id="app">
        <span class="titleDescrip">2. 請選擇您想要合作的產業類型</span>

        <ul class="industryBlock contentBlock">
            <li class="industItem selectItem">
                <fa-icon icon="gamepad" class="icon" />
                <span>遊戲</span>
            </li>
            <li class="industItem">
                <fa-icon icon="video" class="icon" />
                <span>影視</span>
            </li>
            <li class="industItem">
                <fa-icon icon="basketball-ball" class="icon lineStyle" />
                <span>運動</span>
            </li>
            <li class="industItem">
                <fa-icon icon="utensils" class="icon lineStyle" />
                <span>餐飲</span>
            </li>
        </ul>
        <ul class="industryBlock contentBlock">
            <li class="industItem">
                <fa-icon icon="desktop" class="icon" />
                <span>科技</span>
            </li>
            <li class="industItem">
                <fa-icon icon="glasses" class="icon" />
                <span>時尚</span>
            </li>
            <li class="industItem">
                <fa-icon icon="building" class="icon lineStyle" />
                <span>生活</span>
            </li>
            <li class="industItem">
                <fa-icon icon="paw" class="icon lineStyle" />
                <span>寵物</span>
            </li>

        </ul>
        
        
        <router-link to="/trial/loader" class="txtBlue"><span class="nxtBtn">下一步</span></router-link>
    </div>
</template>

<script>

export default {
    name: 'trial_second',
    components: {
    }
}
</script>

