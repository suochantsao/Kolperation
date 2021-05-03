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

                <li class="nonMsgAlert" id="onlineStr"></li>
                
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
                      id="sendText"
                    >
                      <!-- @click="signalrFun" -->
                      <!-- id =sendBtn -->
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

// Signal R 
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;

// var chat      = '';
// var noticeMsg = '';

export default {
    name: 'msgDialog',
    inject:['reload'],
    methods:{
        // signalrFun(){
        //     chat.server.sendMsg($('#sendText').val(), this.sender, this.msgId)
        //     .done(function () {
        //         $('#sendText').val('');
        //     })
        //     .fail(function (e) {
        //         noticeMsg(e)
        //     })
        // },
        confirmCase(){
            const confirmAPI = `https://kolperation.rocket-coding.com/api/KolAppliedTo/${this.caseId}`
            
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

            const sentMsgAPI = `https://kolperation.rocket-coding.com/api/ChatbyKOL`

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
        
        const msgDetailAPI = `https://kolperation.rocket-coding.com/api/GetMessageHistory/${this.msgId}`

        this.$http
          .get( msgDetailAPI, this.config)
          .then( res => {
              this.msgObject  = res.data[0];
              this.msgList    = this.msgObject.Message;
              this.msgAlert   = this.msgList.length;
              this.caseId     = this.msgObject.SponsoredContentId;
              this.userAvatar = this.msgObject.CompanyLogo

              const statusId  = this.msgObject.CoopStatus;
              if ( statusId === 0){
                  this.btnStr = '已報名此案件';
                  this.btnStyle = true;
              }
              else if ( statusId === 1 ){
                  this.btnStr = '確認洽談成功';
                  this.btnStyle = false;
              }
              else if ( status === 2 ){
                  this.btnStr = '已經成功洽談';
                  this.btnStyle = true;
              }
              else if ( statusId === 3 ){
                  this.btnStr = '已被婉拒合作';
                  this.btnStyle = true;
              }
              else if ( statusId === 4 ){
                  this.btnStr = '已拒絕此合作';
                  this.btnStyle = true;
              }
              else if ( statusId === 42 ){
                  this.btnStr = '申請報名案件';
                  this.btnStyle = false;

              }
            
              console.log(this.msgObject);
              console.log('獲取訊息詳細內容成功');
          })
          .catch( err => {
                  console.error(err);
          })
        
        //  var chat = $.connection.chathub;
          
        //     //group
        //     chat.client.sendMsgBack = function (message, character) {
        //         this.textData(character,message)
        //     };
        //     chat.client.notify = function (message) {
        //         noticeMsg(message);
        //     };
        //     var noticeMsg = function (message) {
        //         $("#onlineStr").append(message);
        //     };
        //     var groupId = this.msgId;
        //     var whoIam = this.sender;

        //     $.connection.hub.start()
        //         .done(function () {
        //             chat.server.join(groupId);
        //             chat.server.notify("對方上線了", groupId);
        //         })
        //         .fail(function () {
        //             noticeMsg("連線失敗。");
        //         });
        //     $.connection.hub.connectionSlow(function () {
        //         noticeMsg("連線不穩..");
        //     });
            
        //     $("#sendBtn").on("click", function () {
        //         chat.server.sendMsg($('#sendText').val(), whoIam, groupId)
        //             .done(function () {
        //                 $('#sendText').val('');
        //             })
        //             .fail(function (e) {
        //                 noticeMsg(e)
        //             })
        //     })

    }
}

</script>