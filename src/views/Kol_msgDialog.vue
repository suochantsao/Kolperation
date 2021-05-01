<template>
    <div class="msgDialogBlock scrollSpecial">
        <a @click="routerSet">
        <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="dialogArea">
            <ul class="userInfo">
                <img width="18%" :src="msgObject.CompanyLogo" alt="">
                <li class="caseBlock">
                    <span class="firmTitle">{{msgObject.Title}}</span>
                    <a href="#">
                    <span>{{msgObject.Company}}</span>
                    </a>
                </li>
                <ul class="btnBlock">
                    <li class="detailBtn">
                    <router-link 
                      :to="{ name: 'Kol_sucessDetail', query: { msg: this.caseId }}"
                    >
                        <fa-icon icon="list-ul" class="icon" />
                        <span>案件詳細資料</span>
                    </router-link>
                    </li>

                    <li 
                      class="confirmBtn"
                      :class=" btnStyle === true ? 'disableStyle' : '' "
                      @click="confirmCase"
                    >
                    <router-link to="/kolplat/msg">
                        <fa-icon icon="check-circle" class="icon" />
                        <span>{{btnStr}}</span>
                    </router-link>
                    </li>
                </ul>
            </ul>
            <ul class="dialogDetail dialogOutside">
                
                <li
                 :class= "msgAlert === 0 ? 'nonMsgAlert' : 'dpNone' " 
                >目前尚未有對話記錄</li>
                
                <kol-kol-reply
                  :avatar  = "userAvatar"
                  :eachMsg = "item"
                  :key="item.MsgContentId"
                  v-for="item in msgList" 
                ></kol-kol-reply>
               
                <li class="btnBlock">
                    <input 
                      type="text" 
                      v-model="sendMsg"  
                    >
                    <a
                      @click="sendText"
                    >
                    <span>送出</span>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
// Components
import KolKolReply from '../components/kol-kolReply.vue';


export default {
    name: 'msgDialog',
    inject:['reload'],
    methods:{
        confirmCase(){
            const confirmAPI = `http://kolperation.rocket-coding.com/api/KolAppliedTo/${this.caseId}`
            
            this.$http
              .put(confirmAPI,this.caseId,this.config)
              .then( res => {
                  console.log(res);
                  console.log("確認合作成功");
                  this.successAlert('確認合作成功')

              })
              .catch( err => {
                  console.error(err);
              })
            
        },
        sendText(){
            console.log(this.sendMsg);
            
            let msgInfo = {
               
                "MsgId"  : this.msgId,
                "Message": this.sendMsg,
                "Sender" : 0

            }

            this.msgList.push(msgInfo);

            const sentMsgAPI = `http://kolperation.rocket-coding.com/api/ChatbyKOL`

            this.$http
              .post(sentMsgAPI,msgInfo,this.config)
              .then( res => {
                  console.log(res);
                  console.log("寄出訊息成功");
                  this.sendMsg = '';

              })
              .catch( err => {
                  console.error(err);
              })

        },
        routerSet(){
            this.$router.back(-1);
        },
        successAlert(str){
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: str,
                showConfirmButton: false,
                timer: 1500
            })
        }
    },
    components: { 
        KolKolReply 
    },
    data(){
        return{
            'userToken'  : null,
            'config'     : null,
            'msgObject'  : null,
            'sendMsg'    : null,
            'sender'     : null,
            'msgId'      : null,
            'caseId'     : null,
            'msgAlert'   : null,
            'btnStr'     : null,
            'btnStyle'   : null,
            'userAvatar' : null,
            'msgList'    : [],
        }
    },
    created(){
        console.log(this.$route.query.msg);
        this.msgId     = this.$route.query.msg;
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };
        
        const msgDetailAPI = `http://kolperation.rocket-coding.com/api/GetMessageHistory/${this.msgId}`

        this.$http
          .get( msgDetailAPI, this.config)
          .then( res => {
              this.msgObject  = res.data[0];
              this.msgList    = this.msgObject.Message;
              this.msgAlert   = this.msgList.length;
              this.caseId     = this.msgObject.SponsoredContentId;
              this.userAvatar = this.msgObject.CompanyLogo

              const statusId  = this.msgObject.CoopStatus;
              if ( statusId === 42 || statusId === 0){
                  this.btnStr = '已報名此案件';
                  this.btnStyle = true;
              }
              else{
                  this.btnStr = '確認洽談成功';
                  this.btnStyle = false;
              }
              console.log(this.msgObject);
              console.log('獲取訊息詳細內容成功');
          })
          .catch( err => {
                  console.error(err);
          })

        
    }
}
</script>