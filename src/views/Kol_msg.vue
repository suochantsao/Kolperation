<template>
    <div class="kolMesBlock">
        <h2>訊息通知</h2>
        <div class="mesArea alertArea scrollStyle">
            <msg-item 
              :msgInfo = "item"
              :key="item.MsgId"
              v-for="item in msgList" 
            >
            </msg-item>
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
            'msgList'  : [],
            'userToken': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        const msgAPI   = 'http://kolperation.rocket-coding.com/api/GetMessageHistories';
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        console.log(this.userToken);
        
        this.$http
          .get(msgAPI,config)
          .then( res => {
              console.log(res);
              this.msgList = res.data;
          })
          .catch( err => {
              console.error(err);
          })

    }

}
</script>
