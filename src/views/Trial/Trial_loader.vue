<template>
    <div id="app">
        <page-loader></page-loader>
    </div>
</template>

<script>
// Components
import PageLoader from '../../components/Page-loader.vue'

export default {
    name: 'trial_loader',
    components: {
        PageLoader
    },
    data(){
        return{
            'channelList': {},
            'sectorList' : {}
        }
    },
    created(){
        this.channelList = this.$route.query.channels;
        this.sectorList  = this.$route.query.sectors;
        console.log(this.channelList);
        console.log(this.sectorList);

        setTimeout(()=>
        this.$router.push({ 
            path: "/trial/result",
            query: {
                "channelTags": `${this.channelList}`,
                "sectorTags" : `${this.sectorList}`,
            }
        }),
        2000
      );

    }
}
</script>
