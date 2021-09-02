<template>
    <div class="kolMesBlock firmMsgBlock">

        <div class="container trialContent searchfirmBlock ">
            <ul class="resultTopArea">
                <li>
                    <h2><span>KOL搜尋結果</span></h2>  
                    <span class="titleDescrip">以下是您所搜尋的案件結果</span>
                </li>
                <li class="btnArea">
                    <span 
                      class="allBtn"
                      @click="showAllResult"
                    >顯示全部 KOL</span>
                    <span 
                      class="researchBtn"
                      @click="researchFun"
                    >
                    重新搜尋</span>
                </li>
            </ul>
            <ul class="mesArea alertArea sucessArea saveFirmArea  searchResult scrollWhite">

                <firm-result-item
                    :caseItem="item"
                    :key="item.Guid"
                    v-for="item in kolList"
                ></firm-result-item>

            </ul>

        </div>

    </div>
</template>

<script>
// Components
import FirmResultItem from '../../components/firm-resultItem.vue';

export default {
    name: 'search',
    components: {
        FirmResultItem,
    },
    methods:{
    
        researchFun(){
            this.$router.push({ path: '/firmplat/searchPlat' })

        },
        showAllResult(){
            const searchAPI    = `https://kolperation.rocket-coding.com/api/GetKOLsList`;

            this.$http
              .get(searchAPI ,this.config)
              .then( res => {
                  console.log('全部案件搜尋結果');
                  console.log(res);
                  this.kolList = res.data;
              })
              .catch( err => {
                  console.error(err);
              });
        }
    },
    data(){
        return{
            'kolList' : [],
            'userToken': null,
            'config'   : null,
        }
    },
    created(){
        const channelItem = this.$route.query.channelTags;
        const sectorList  = this.$route.query.sectorTags;
        const fansList    = this.$route.query.Fans;
    
        const correctChannels  = channelItem.slice(0,channelItem.length-1);
        const correctSectors   = sectorList.slice(0,sectorList.length-1);
        const correctFans      = fansList.slice(0,fansList.length-1);
        
        console.log(correctChannels);
        console.log(correctSectors);
        console.log(correctFans);

        let searchAPI    = `https://kolperation.rocket-coding.com/api/GetKOLsList?channelTags=${correctChannels}&sectorTags=${correctSectors}&Fans=${correctFans}`;

        this.userToken   = window.localStorage.getItem('token');
        this.config      = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get(searchAPI ,this.config)
          .then( res => {
              console.log('條件案件搜尋結果');
              console.log(res);
              this.kolList = res.data;
              console.log(this.kolList);

              if( this.kolList.length === 0){
                  
                  this.$swal({
                    icon: 'info',
                    title: '沒有符合的搜尋結果',
                    text: '我們將提供您所有的KOL',
                  })
                  this.showAllResult();
              }

          })
          .catch( err => {
              console.error(err);
          });

    }
    
}
</script>