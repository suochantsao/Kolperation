<template>
    <div class="kolMesBlock">
        <h2 class="sucessH2">儲存公司</h2>
        <div class="mesArea alertArea sucessArea saveFirmArea scrollStyle">

            <kol-save-firm-item
              :caseItem="item"
              :key="item.CompanyId"
              v-for="item in saveFirmList" 
            >
            </kol-save-firm-item>            

        </div>
    </div>
        
</template>

<script>
// Components
import KolSaveFirmItem from '../components/kol-saveFirmItem.vue'

export default {
    components:{
        KolSaveFirmItem
    },
    data(){
        return{
            'saveFirmList': [],
            'caseId': null,
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const saveFirmAPI   = 'http://kolperation.rocket-coding.com/api/GetKOLFavoriteCompanies';
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get( saveFirmAPI, config)
          .then( res => {
              this.saveFirmList = res.data
              console.log(this.saveFirmList);
          })
          .catch( err => {
                  console.error(err);
          })
    }
    
}
</script>
