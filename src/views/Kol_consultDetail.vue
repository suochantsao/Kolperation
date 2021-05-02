<template>
    <div class="consultDetailBlock msgDialogBlock scrollSpecial">
        <a @click="routerSet">
        <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="consultDetArea">
            <ul class="caseBasic">
                <img width="60%" :src="caseDetail.ProductPicture">                
                <ul class="conditionBlock">
                    <h1>{{caseDetail.Title}}</h1>

                    <li 
                      class="companyName"
                      @click="linkToFirm"
                    >{{caseDetail.Company}}</li>
                    
                    <li class="budget">合作預算： ${{caseDetail.Budget}}</li>
                    <li class="needsNum">截止日期： {{dateStr}}</li>

                    <kol-channel-item
                        :channels = "channelList"
                    ></kol-channel-item>

                </ul>

                <btn-add-fav
                    :contentId = "caseId"
                    :boolStr   = "favBool"
                >
                </btn-add-fav>
                
            </ul>

            <ul class="caseInfo">
                <ul class="caseDetail">
                    <li class="blockTitle">合作內容</li>
                    <p>{{caseDetail.Detail}}<br/>
                        
                    </p>
                    <ul class="btnBlock">
                        <a>
                        <li 
                          class="applyBtn"
                          :class=" btnStyle === true ? 'disableStyle' : '' "
                          @click="applyCase"
                        >
                            <fa-icon :icon="['far', 'handshake']" class="icon" />
                            <span>{{btnStr}}</span>
                        </li>
                        </a>
                        <a>
                        <li 
                          class="askBtn"
                          @click="contactFirm"
                        >
                            <fa-icon icon="comments" class="icon" />
                            <span>站內詢問</span>
                        </li>
                        </a>
                    </ul>
                </ul>
                <ul class="caseRequire">
                    <li class="blockTitle">需求條件</li>
                    <ul class="requireBlock">
                        <li>
                            <fa-icon icon="users" class="icon" />
                            <span>追蹤人數：10,000人</span>
                        </li>
                        <li>
                            <fa-icon icon="user-tie" class="icon" />
                            <span>需求人數：{{caseDetail.PeopleRequired}}人</span>
                        </li>
                        <li>
                            <fa-icon icon="comment-dots" class="icon" />
                            <span>{{caseDetail.MinimumRequirement}}</span>
                        </li>
                    </ul>
                </ul>
            </ul>
        </div>

    </div>
</template>

<script>
// Components
import btnAddFav from '../components/btn-addFav.vue';
import KolChannelItem from '../components/kol-channelItem.vue';

export default {
    inject:['reload'],
    components: { 
        btnAddFav,
        KolChannelItem 
    },
    methods:{
        applyCase(){
            const applyAPI = `https://kolperation.rocket-coding.com/api/KolAppliedTo/${this.caseId}`
            
            this.$http
              .put(applyAPI,this.caseId,this.config)
              .then( res => {
                  console.log(res);
                  console.log("確認報名成功");
                  this.successAlert('確認報名成功');
                  this.$router.push({ path: `/kolplat/sucessDetail?msg=${this.caseId}`})
              })
              .catch( err => {
                  console.error(err);
              })
            
        },
        contactFirm(){

            const contactFirmAPI = `https://kolperation.rocket-coding.com/api/PostMessagebyKOL`

            let contactItem = {
                "SponsoredContentId": this.caseId
            }

            this.$http
              .post(contactFirmAPI,contactItem,this.config)
              .then( res => {
                  console.log(res.data[0]);
                  console.log("聯繫廠商成功");
                
                  this.msgId = res.data[0].MsgId
                  this.$router.push({ path: `/kolplat/msgDialog?msg=${this.msgId}`})

              })
              .catch( err => {
                  console.error(err);
              })

        },
        linkToFirm(){
            this.$router.push({ 
            path: "/kolplat/firmdetail",
            query: {
                "firm": `${this.firmGuid}`,
                "company" : `${this.companyId}`,
            }
        })
        },
        definedStr(){
            if( this.statusId === 1 ){
                this.btnStr = '確認合作';
                this.btnStyle = false;
            }
            else if ( this.statusId === 2 ){
                this.btnStr = '洽談成功';
                this.btnStyle = true;
            }
            else if( this.statusId === 0 ){
                this.btnStr = '已經報名'
                this.btnStyle = true;
            }
            else if( this.statusId === 3 ){
                this.btnStr = '公司婉拒'
                this.btnStyle = true;
            }
            else{
                this.btnStr = '我要報名';
                this.btnStyle = false;
            }
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
            'caseDetail'  : null,
            'companyId'   : null,
            'firmGuid'    : null,
            'dateStr'     : null,
            'favBool'     : null,
            'caseId'      : null,
            'msgId'       : null,
            'config'      : null,
            'userToken'   : null,
            'statusId'    : null,
            'btnStr'      : null,
            'btnStyle'    : null,
            'channelList' : [],
        }
    },
    created(){
        this.caseId     = this.$route.query.msg;
        this.userToken  = window.localStorage.getItem('token');
        this.config     = { headers: { Authorization: `Bearer ${this.userToken}` } };

        const detailAPI = `https://kolperation.rocket-coding.com/api/GetSponsoredContent/${this.caseId}`;

        this.$http
          .get(detailAPI,this.config)
          .then( res => {
              this.caseDetail  = res.data;
              this.dateStr     = this.caseDetail.EndTime.slice(0,10).replace(/-/g,".");
              this.favBool     = this.caseDetail.Favorite;
              this.channelList = this.caseDetail.Channels;
              this.statusId    = this.caseDetail.CoopStatus;
              this.companyId   = this.caseDetail.CompanyId;
              this.firmGuid    = this.caseDetail.Guid;

              this.definedStr();

              console.log(res.data);
          })
          .catch( err => {
              console.error(err);
          });

    }

}
</script>