<template>
    <div class="kolMesBlock firmMsgBlock">
        <h2 class="sucessH2">儲存KOL</h2>
        <div class="mesArea alertArea sucessArea saveFirmArea scrollWhite">
            
            <firm-save-kol-item
              :caseItem="item"
              :key="item.KOLId"
              v-for="item in saveKolList" 
            ></firm-save-kol-item>
            
        </div>
    </div>
        
</template>

<script>
// Components
import FirmSaveKolItem from '../../components/firm-saveKolItem.vue'

export default {
    components:{
        FirmSaveKolItem
    },
    data(){
        return{
            'saveKolList': [],
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };
        const saveKolAPI   = 'https://kolperation.rocket-coding.com/api/GetCompanyFavoriteKOLs';

        this.$http
          .get( saveKolAPI, config)
          .then( res => {
              this.saveKolList = res.data
              console.log(this.saveKolList);
          })
          .catch( err => {
                  console.error(err);
          });

    }
    
}
</script>
