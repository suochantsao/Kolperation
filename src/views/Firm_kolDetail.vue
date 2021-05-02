<template>
    <div class="firmDetailBlock consultDetailBlock msgDialogBlock kolDetailBlock scrollSpecial">
        <a @click="routerSet">
        <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="firmDetArea consultDetArea firmDetArea">
            <ul class="caseBasic">
                <img width="30%" :src="avatar">                
                <ul class="conditionBlock">
                    <h1>{{kolName}}</h1>
                    
                    <firm-plat-item
                        :channels = "channelList"
                    ></firm-plat-item>

                    <li class="budget successNum">成功洽談 : {{successNum}} 次</li>
                    
                </ul>
                <ul>
                    <btn-add-fav
                    :boolStr   = true
                    :definedId = "kolStr"
                    :contentId = "kolId"
                    ></btn-add-fav>
                </ul>
                
            </ul>

            <ul class="caseInfo">
                <ul class="caseDetail">
                    <li class="blockTitle">KOL簡介</li>
                    <ul class="introBlock">
                        <p>{{kolIntro}}</p>
                        <li
                          @click="inviteKol"
                        >邀請此KOL合作</li>
                    </ul>
                </ul>

                <ul class="caseRequire">
                    <li class="blockTitle">KOL資訊</li>
                    <ul class="requireBlock">
                        <li>
                            <fa-icon icon="users" class="icon" />
                            <span>粉絲人數 : {{fansNum}}</span>
                        </li>
                        <li class="longArea">
                            <fa-icon icon="sms" class="icon" />
                            <span>使用平台 : {{firmAddress}}</span>
                            <firm-plat-item
                                :channels = "channelList"
                            ></firm-plat-item>
                        </li>
                        <li>
                            <fa-icon icon="mobile" class="icon" />
                            <span>電話 : {{firmCellphone}}</span>
                        </li>
                        <li class="longArea">
                            <fa-icon icon="envelope" class="icon" />
                            <span>Email : {{firmEmail}}</span>
                        </li>
                        
                    </ul>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>
// Components
import btnAddFav     from '../components/btn-addFav.vue';
import FirmPlatItem  from '../components/firm-platItem.vue'

export default {
    name: 'kolDetail',
    components: { 
        btnAddFav,
        FirmPlatItem 

    },
    methods:{
        routerSet(){
            this.$router.back(-1);
        },
        inviteKol(){
            this.$swal({
                title: '請選擇要合作的案件',
                input: 'select',
                inputOptions: this.optionObj,
                inputPlaceholder: '案件選擇',
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {

                        if (value === '') {
                            resolve('您必須選擇一個案件');
                        } else {
                            resolve();
                            console.log(value);
                            let sponId = value;
                            console.log(sponId);
                            let sponObj = {
                                "SponsoredContentId": sponId,
                                // "KolId": this.kolId
                            }

                            // const msgAPI    = `http://kolperation.rocket-coding.com/api/PostMessagebyCompany`
                            const inviteAPI = `https://kolperation.rocket-coding.com/api/CompanyInvited/${this.kolId}`
                            this.$http
                            .post(inviteAPI,sponObj,this.config)
                            .then( res => {
                                console.log(res);
                                console.log("邀請KOL成功");
                                // this.msgId = res.data[0].MsgId;
                                this.successAlert();
                                // this.$router.push({ 
                                //     path: "/firmplat/msgdialog",
                                //     query: { "msg": this.msgId }
                                // })

                            })
                            .catch( err => {
                                console.error(err);
                            })
                        }
                    })
                }
            })
        },
        successAlert(){
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: '邀請合作成功',
                timer: 1800
            });
        }
    },
    data(){
        return{
            'favBool'       : null,
            'kolId'         : null,
            'msgId'         : null,
            'kolDetail'     : null,
            'kolName'       : null,
            'fansNum'       : null,
            'kolGuid'       : null,
            'userToken'     : null,
            'config'        : null,
            'avatar'        : null,
            'firmEmail'     : '暫不提供',
            'kolIntro'      : '暫不提供',
            'firmContact'   : '暫不提供',
            'firmAddress'   : '暫不提供',
            'firmCellphone' : '暫不提供',
            'successNum'    : 0,
            'channelList'   : [],
            'optionObj'     : {},
            'kolStr'        : 'kol',

        }
    },
    created(){
        this.kolId  = this.$route.query.KOLid;
        this.kolGuid  = this.$route.query.KOlguid;
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };
    
        const kolAPI   = `https://kolperation.rocket-coding.com/api/GetKOL/${this.kolGuid}`
        const caseAPI  = `https://kolperation.rocket-coding.com/api/GetSponsoredContentsByCompany`

        this.$http
          .get( kolAPI, this.config)
          .then( res => {
              console.log(res);
              this.kolDetail  = res.data[0];
              this.favBool    = this.kolDetail.Favorite;
              console.log(this.favBool);
              
              if( this.kolDetail.KOLProfile !== null ){
                  this.kolIntro   = this.kolDetail.KOLProfile;
              }
              if( this.kolDetail.Phone !== null ){
                  this.firmCellphone = this.kolDetail.Phone;
              }
              if( this.kolDetail.Email !== null ){
                  this.firmEmail   = this.kolDetail.Email;
              }
              if( this.kolDetail.PersonInCharge !== null ){
                  this.firmContact = this.kolDetail.PersonInCharge;
              }
              if( this.kolDetail.Address !== null ){
                  this.firmAddress = this.kolDetail.Address;
              }
              
                this.channelList = this.kolDetail.Channels;
                this.kolName     = this.kolDetail.Username;
                this.successNum  = this.kolDetail.CoopTimes;
                this.fansNum     = this.kolDetail.Channels[0].FansNumber;
                this.favBool     = this.kolDetail.Favorite;
                this.avatar      = this.kolDetail.KOLavatar;
                
          })
          .catch( err => {
                  console.error(err);
          });

        this.$http
          .get( caseAPI, this.config)
          .then( res => {
              console.log(res.data);

              let caselist = res.data;
              caselist.forEach( item => {
                  let title  = item.Title.toString();
                  let sponId = item.SponsoredContentId.toString(); 
                  this.optionObj[sponId] = title;
              });
                          
             console.log(this.optionObj);

          })
          .catch( err => {
              console.error(err);
          })
        
    }
}
</script>