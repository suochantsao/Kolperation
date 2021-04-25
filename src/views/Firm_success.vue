<template>
    <div class="kolMesBlock firmMsgBlock">
        <h2 class="sucessH2">洽談成功案件總覽</h2>
        <span class="sucessDescript">僅顯示近期內的成功洽談案件</span>
        <div class="mesArea alertArea sucessArea scrollStyle scrollSpecial">
         
            <firm-success-item
              :caseItem="item"
              :key="item.SponsoredContentId"
              v-for="item in successList" 
            >
            </firm-success-item>
         
        </div>
    </div>
        
</template>

<script>
// Components
import FirmSuccessItem from '../components/firm-successItem.vue';

export default {
    components:{
        FirmSuccessItem
    },
    data(){
        return{
            'successList': [],
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const successAPI   = 'http://kolperation.rocket-coding.com/api/GetCompanySuccessfulCasesTop10';
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get( successAPI, config)
          .then( res => {
              this.successList = res.data
              console.log(this.successList);
          })
          .catch( err => {
                  console.error(err);
          })
    }
    
}
</script>
