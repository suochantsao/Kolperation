<template>

  <router-view v-if="isRouterAlive" />
  
</template>

<script>
import login from './views/auth/Login.vue'

export default {
  name: 'App',
  data(){
    return{
      'token': null,
      'isRouterAlive': true,
    }
  },
  provide(){
    return{
      reload: this.reload
    };
  },
  methods:{
    test(){
      console.log(login.token);
      console.log(this.token);
    },
    reload(){
      this.isRouterAlive = false;
      this.$nextTick( () => {
        this.isRouterAlive = true;
      })
    }
  }
  
}
</script>

<style>
/* CSS */
@import "../css/main.min.css";


</style>
