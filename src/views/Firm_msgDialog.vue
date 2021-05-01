<template>
    <div class="msgDialogBlock firmDiaBlock scrollSpecial">
        <a @click="routerSet">
        <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="dialogArea">
            <ul class="userInfo">
                <img width="18%" :src="msgObject.KOLavatar" alt="">
                <li class="caseBlock">
                    <span class="firmTitle">{{msgObject.Title}}</span>
                    <a href="#">
                    <span>{{msgObject.Username}}</span>
                    </a>
                </li>
                <ul class="btnBlock">
                    <li class="detailBtn">
                    <router-link 
                      :to="{ name: 'firmConsultDetail', query: { msg: this.caseId }}"
                    >
                        <fa-icon icon="list-ul" class="icon" />
                        <span>案件詳細資料</span>
                    </router-link>
                    </li>

                    <li 
                      class="confirmBtn"
                      @click="confirmCase"
                      :class=" btnStyle === true ? 'disableStyle' : '' "
                    >
                    <router-link to="/firmplat/msg">
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
                
                <firm-firm-reply
                  :avatar  = "userAvatar"
                  :eachMsg = "item"
                  :key="item.MsgContentId"
                  v-for="item in msgList" 
                >
                </firm-firm-reply>
               
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
import FirmFirmReply from '../components/firm-firmReply.vue'

export default {
    name: 'msgDialog',
    inject:['reload'],
    components: { 
        FirmFirmReply 
    },
    methods:{
        confirmCase(){
            const confirmAPI = `http://kolperation.rocket-coding.com/api/CompanyInvited/${this.kolId}`
            
            let confirmObj = {
                "SponsoredContentId":this.caseId,
            }

            this.$http
              .put(confirmAPI,confirmObj,this.config)
              .then( res => {
                  console.log(res);
                  console.log("確認合作成功");
                  this.successAlert('確認合作成功')
                  this.reload();

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
                "Sender" : 1

            }
            console.log(this.config);
            
            this.msgList.push(msgInfo);

            const sentMsgAPI = `http://kolperation.rocket-coding.com/api/ChatbyCompany`

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
    data(){
        return{
            'userToken'  : null,
            'config'     : null,
            'msgObject'  : null,
            'sendMsg'    : null,
            'sender'     : null,
            'msgId'      : null,
            'caseId'     : null,
            'kolId'      : null,
            'msgAlert'   : null,
            'btnStr'     : null,
            'btnStyle'   : null,
            'userAvatar' : null,
            'msgList'    : [],
        }
    },
    created(){
        this.msgId = this.$route.query.msg;
        this.userToken = window.localStorage.getItem('token');
        this.config   = { headers: { Authorization: `Bearer ${this.userToken}` } };
        
        const msgDetailAPI = `http://kolperation.rocket-coding.com/api/GetMessageHistory/${this.msgId}`

        this.$http
          .get( msgDetailAPI, this.config)
          .then( res => {
              this.msgObject  = res.data[0];
              this.msgList    = this.msgObject.Message;
              this.msgAlert   = this.msgList.length;
              this.caseId     = this.msgObject.SponsoredContentId;
              this.kolId      = this.msgObject.KolId;
              this.userAvatar = this.msgObject.KOLavatar;


              const statusId = this.msgObject.CoopStatus;
              if ( statusId === 2 ){
                  this.btnStr = '已洽談過案件';
                  this.btnStyle = true;
              }
              else if ( statusId === 1 ){
                  this.btnStr = '等候對方回覆';
                  this.btnStyle = true;
              }
              else{
                  this.btnStr = '確認洽談成功';
                  this.btnStyle = false;
              }
              

              console.log('獲取訊息詳細內容成功');
              console.log(this.msgObject);
          })
          .catch( err => {
                  console.error(err);
          })

        
    }
}
</script>