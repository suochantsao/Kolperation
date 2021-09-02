<template>
    <div class="dialogBg">
        <ul class="dialogBlock">
          <li class="loaderBlock">
            <page-loader></page-loader>
          </li>
        </ul>
    </div>
</template>

<script>
import PageLoader from '../../components/Page-loader.vue'

export default {
    name: 'trial_loader',
    components: {
        PageLoader
    },
    data(){
      return{
        pathStr: '',
      }
    },
    created(){
      console.log(this.$route.query.loadPath)

      setTimeout(()=>{
        this.pathStr = this.$route.query.loadPath
        this.$router.push({ path: `/${this.pathStr}`})
      }
      ,1800
      );
    }
}
</script>

