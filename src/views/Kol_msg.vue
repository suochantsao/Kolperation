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

        this.$http
          .get(msgAPI,config)
          .then( res => {
            //   console.log(res);
              this.msgList = res.data;
          })
          .catch( err => {
              console.error(err);
          })

        this.$http
         .get(
             `http://kolperation.rocket-coding.com/api/TagSectors`,
             config
         )
         .then( res => {
             console.log('產業別標籤如下');
             console.log(res);
             
         })

        this.$http
         .get(
             `http://kolperation.rocket-coding.com/api/TagChannels`,
             config
         )
         .then( res => {
             console.log('平台別標籤如下');
             console.log(res);
         })

    }

}
</script>
