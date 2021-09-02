<template>
    <div class="kolMesBlock firmMsgBlock">
        <h2 class="sucessH2">過往成功案件總覽</h2>
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
import FirmSuccessItem from '../../components/firm-successItem.vue';

export default {
    components:{
        FirmSuccessItem
    },
    data(){
        return{
            'successList': [],
        }
    },
    created(){
        const userToken  = window.localStorage.getItem('token');
        const config     = { headers: { Authorization: `Bearer ${userToken}` } };

        const successAPI = 'https://kolperation.rocket-coding.com/api/GetCompanySuccessfulCases';

        this.$http
          .get( successAPI, config)
          .then( res => {
              console.log(res);
          })
          .catch( err => {
                  console.error(err);
          })
    }
    
}
</script>
