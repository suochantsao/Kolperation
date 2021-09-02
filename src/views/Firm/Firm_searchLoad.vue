<template>
    <div class="kolMesBlock">

        <div class="container trialContent searchfirmBlock searchLoader">
                <page-loader></page-loader>
        </div>

    </div>
</template>

<script>
// Components
import PageLoader from '../../components/Page-loader.vue'

export default {
    name: 'search',
    components: {
        PageLoader
    },
    data(){
        return{
            'channelList': {},
            'sectorList' : {},
            'fansList'   : {},
        }
    },
    created(){
        this.channelList = this.$route.query.channels;
        this.sectorList  = this.$route.query.sectors;
        this.fansList    = this.$route.query.fans;

        setTimeout(()=>
        this.$router.push({ 
            path: "/firmplat/searchresult",
            query: {
                "channelTags": `${this.channelList}`,
                "sectorTags" : `${this.sectorList}`,
                "Fans"       : `${this.fansList}`
            }
        }),
        2000
      );

    }
    
}
</script>