<template>
    <div id="app">
        <home-header></home-header>

        <div class="container trialContent">
            <h2><span>案件搜尋</span></h2>  
            <span class="titleDescrip">請依照您的需求選擇對應的選項</span>
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

