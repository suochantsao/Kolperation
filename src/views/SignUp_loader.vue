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
import PageLoader from '../components/Page-loader.vue'

export default {
    name: 'trial_loader',
    components: {
        PageLoader
    },
    created(){
      setTimeout(()=>
        this.$router.push({ path: "/kolplat"}),
        2500
      );
    }
}
</script>

