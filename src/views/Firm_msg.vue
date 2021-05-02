<template>
    <div class="kolMesBlock firmMsgBlock">
        <h2>訊息通知</h2>
        <div class="mesArea alertArea scrollWhite">
            <firm-msg-item
              :msgInfo = "item"
              :key="item.MsgId"
              v-for="item in msgList" 
            >
            </firm-msg-item>
        </div>
    </div>
        
</template>

<script>
// Components
import FirmMsgItem from '../components/firm-msgItem.vue';

export default {
    components:{
        FirmMsgItem,
    },
    data(){
        return{
            'msgList'  : [],
        }
    },
    created(){
        const userToken = window.localStorage.getItem('token');
        const msgAPI    = 'https://kolperation.rocket-coding.com/api/GetMessageHistories';
        const config    = { headers: { Authorization: `Bearer ${userToken}` } };

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
