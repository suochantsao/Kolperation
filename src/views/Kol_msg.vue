<template>
    <div class="kolMesBlock">
        <h2>訊息通知</h2>
        <div class="mesArea alertArea scrollStyle">
            <msg-item :msgPack = "msgObject"></msg-item>
            
            
        </div>
    </div>
        
</template>

<script>
// Components
import msgItem from '../components/kol-msgItem.vue'

export default {
    components:{
        msgItem,
    },
    data(){
        return{
            'msgObject': null,
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const msgAPI   = 'http://kolperation.rocket-coding.com/api/GetMessageHistories';
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get(msgAPI,config)
          .then( res => {
              console.log(res);
              this.msgObject = res.data[0];
              console.log(this.msgObject);
          })
    }

}
</script>
