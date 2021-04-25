<template>
    <div class="kolMesBlock">
        <h2>儲存案件</h2>
        <div class="mesArea alertArea applyArea saveCaseArea scrollStyle">
            <kol-save-item
              :caseItem="item"
              :key="item.SponsoredContentId"
              v-for="item in saveCaseList" 
            >
            </kol-save-item>
        </div>
    </div>
        
</template>

<script>
// Components
import KolSaveItem from '../components/kol-saveItem.vue'

export default {
    components:{
        KolSaveItem,
    },
    data(){
        return{
            'saveCaseList': [],
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const saveCaseAPI   = 'http://kolperation.rocket-coding.com/api/GetKOLFavoriteSCs';
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get( saveCaseAPI, config)
          .then( res => {
              this.saveCaseList = res.data
              console.log(this.saveCaseList);
          })
          .catch( err => {
              console.error(err);
          })
    }
    
}
</script>
