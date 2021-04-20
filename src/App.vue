<template>
  
  <router-view />
  

</template>

<script>
import login from './views/Login.vue'

export default {
  name: 'App',
  data(){
    return{
      'token': null,
    }
  },
  methods:{
    test(){
      console.log(login.token);
      console.log(this.token);
    }
  }
  
}
</script>

<style>
/* CSS */
@import "../css/main.min.css";


</style>
