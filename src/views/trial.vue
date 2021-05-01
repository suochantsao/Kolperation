<template>
    <div id="app">
        <home-header></home-header>

        <div class="container trialContent">
            <h2><span>合作案件搜尋</span></h2>  

            <router-view />

        </div>

        <home-footer></home-footer>
    </div>
</template>

<script>
// Components
import homeHeader  from '../components/home-header.vue'
import homeFooter  from '../components/home-footer.vue'

export default {
    name: 'trial',
    components: {
        homeHeader,
        homeFooter,
    }
}

</script>