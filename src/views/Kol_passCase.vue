<template>
    <div class="kolMesBlock">
        <h2 class="sucessH2">過往成功案件總覽</h2>
        <div class="mesArea alertArea sucessArea scrollStyle scrollSpecial">
            
            <kol-pass-case

            >
            </kol-pass-case>
            
        </div>
    </div>
        
</template>

<script>
// Components
import KolPassCase from '../components/kol-passItem.vue'

export default {
    components:{
        KolPassCase,
    },
    data(){
        return{
            'passCaseList': [],
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const passCaseAPI   = 'http://kolperation.rocket-coding.com/api/GetKOLsuccessfulCases';
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get( passCaseAPI, config)
          .then( res => {
              this.passCaseList = res.data
              console.log(this.passCaseList);
          })
          .catch( err => {
                  console.error(err);
          })
    }
    
}
</script>
