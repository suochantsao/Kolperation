<template>
    <div class="kolMesBlock">

        <div class="container trialContent searchfirmBlock">
            <ul class="resultTopArea">
                <li>
                    <h2><span>案件搜尋結果</span></h2>  
                    <span class="titleDescrip">以下是您所搜尋的案件結果</span>
                </li>
                <li class="btnArea">
                    <span 
                      class="allBtn"
                      @click="showAllResult"
                    >顯示全部案件</span>
                    <span 
                      class="researchBtn"
                      @click="researchFun"
                    >
                    重新搜尋</span>
                </li>
            </ul>
            <ul class="mesArea alertArea applyArea saveCaseArea searchResult scrollWhite">
                <kol-save-item
                    :caseItem="item"
                    :key="item.SponsoredContentId"
                    v-for="item in caseList" 
                >
            </kol-save-item>
            </ul>

        </div>

    </div>
</template>

<script>
// Components
import KolSaveItem from '../components/kol-saveItem.vue'

export default {
    name: 'search',
    components: {
        KolSaveItem,
    },
    methods:{
        researchFun(){
            this.$router.push({ path: '/kolplat/searchPlat' })

        },
        showAllResult(){
            const searchAPI    = `http://kolperation.rocket-coding.com/api/GetSponsoredContentsList`;
            this.$http
            .get(searchAPI ,this.config)
            .then( res => {
                console.log('全部案件搜尋結果');
                console.log(res);
                this.caseList = res.data;
            })
            .catch( err => {
                console.error(err);
            });
        }
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

        let searchAPI    = `http://kolperation.rocket-coding.com/api/GetSponsoredContentsList?channelTags=${channelItem}&sectorTags=${sectorList}`;
        // const allFirmAPI = `http://kolperation.rocket-coding.com/api/GetCompaniesList`
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
                    icon: 'info',
                    title: '沒有符合的搜尋結果',
                    text: '我們將提供您所有的案件結果',
                  })
                  this.showAllResult();
              }

          })
          .catch( err => {
              console.error(err);
          });

        // this.$http
        //   .get(allFirmAPI ,this.config)
        //   .then( res => {
        //       console.log(res);
        //   })
        //   .catch( err => {
        //       console.error(err);
        //   });

    }
    
}
</script>