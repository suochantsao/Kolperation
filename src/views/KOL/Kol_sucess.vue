<template>
    <div class="kolMesBlock">
        <h2 class="sucessH2">洽談成功案件總覽</h2>
        <span class="sucessDescript">僅顯示近期內的成功洽談案件</span>
        <div class="mesArea alertArea sucessArea scrollStyle scrollSpecial">
         
            <kol-success-item
              :caseItem="item"
              :key="item.SponsoredContentId"
              v-for="item in successList" 
            >
            </kol-success-item>
         
        </div>
    </div>
        
</template>

<script>
// Components
import KolSuccessItem from '../../components/kol-successItem.vue'

export default {
    components:{
        KolSuccessItem
    },
    data(){
        return{
            'successList': [],
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const successAPI   = 'https://kolperation.rocket-coding.com/api/GetKOLsuccessfulCasesTop10';
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get( successAPI, config)
          .then( res => {
              this.successList = res.data
            //   console.log(this.successList);
          })
          .catch( err => {
                  console.error(err);
          })
    }
    
}
</script>
