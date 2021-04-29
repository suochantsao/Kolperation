<template>

    <div id="app">
        <span class="titleDescrip">搜尋結果</span>

        <trial-item
            :caseItem="item"
            :key="item.SponsoredContentId"
            v-for="item in caseList"
        ></trial-item>
        
        <router-link to="/login">
            <li class="moreBtn">查看更多搜尋結果</li>
        </router-link>
    </div>
    
</template>

<script>
import trialItem from '../components/trial-item.vue';
export default {
    name: 'trial_result',
    components: { 
        trialItem 
    },
    data(){
        return{
            'caseList' : [],
            'userToken': null,
            'config'   : null,
        }
    },
    created(){
        const channelItem = this.$route.query.channelTags;
        const sectorList  = this.$route.query.sectorTags;
        console.log(channelItem);
        console.log(sectorList);

        let  searchAPI   = `http://kolperation.rocket-coding.com/api/GetSponsoredContentsPreview?channelTags=${channelItem}&sectorTags=${sectorList}`;
        this.userToken   = window.localStorage.getItem('token');
        this.config      = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get(searchAPI ,this.config)
          .then( res => {
              console.log('條件案件搜尋結果');
              console.log(res);
              this.caseList = res.data;

              if( this.caseList.length === 0){
                  
                  this.$swal({
                    icon: 'question',
                    title: '沒有符合的搜尋結果',
                  })
              }

          })
          .catch( err => {
              console.error(err);
          });


    }
    
}


</script>
