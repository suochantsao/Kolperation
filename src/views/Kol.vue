<template>
    <div id="app" class="kolPlat">
        <kol-header></kol-header>
        <div class="kolContent">
            <kol-navbar></kol-navbar>
            <router-view />
        </div>
    </div>
</template>

<script>
// Components
import kolHeader from '../components/kol-header.vue'
import KolNavbar from '../components/kol-navbar.vue'

export default {
  components: { 
    kolHeader,
    KolNavbar,
  }
    
}
</script>
