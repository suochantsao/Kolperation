<template>
    <div class="consultDetailBlock msgDialogBlock firmConsultBlock scrollSpecial">
        <a @click="routerSet">
        <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="consultDetArea">
            <ul class="caseBasic">
                <img width="60%" src="https://blush.design/api/download?shareUri=Qnt8NFR94jtAwxnw&c=Hair_0%7E9b5120-0.1.0%7E0f0f0f-0.1.1%7Ec38741-0.1.2%7Ec38741_Skin_0%7E7d4439-0.1.0%7Ef6cbc3-0.1.1%7Ec26e5e-0.1.2%7E7d4439&w=800&h=800&fm=png">                
                <ul class="conditionBlock">
                    <h1>{{caseDetail.Title}}</h1>
                    <li>{{caseDetail.Company}}</li>
                    <li class="budget">合作預算： ${{caseDetail.Budget}}</li>
                    <li class="needsNum">截止日期： {{dateStr}}</li>

                    <kol-channel-item
                        :channels = "channelList"
                    ></kol-channel-item>
                </ul>
                <li class="favBtnBlock">
                    <fa-icon 
                        :icon="['fas', 'edit']" 
                        class="favIcon likeIcon editIcon" 
                    />
                </li>
            </ul>
            

            <ul class="caseInfo">
                <ul class="caseDetail">
                    <li class="blockTitle">合作內容</li>
                    <p>{{caseDetail.Detail}}<br/>
                        1.文章以正面回饋為主，體驗中如有任何建議請直接反應<br/>
                        2.標題上請勿出現類似邀稿，試用文字<br/>
                        3.文章連結與圖文須同意我們作為廣告連結(Google & FB) 或使用.修改或重製您提供的照片.影音等素材或引用部分內容使用於後續銷售宣傳<br/>
                        4.標題上請勿出現類似邀稿，試用文字
                    </p>
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
        
        <div class="kolMesBlock firmManageBlock">
            <h2 class="topTitle">申請合作KOL</h2>
            <div class="alertArea scrollStyle">
                
                <!--  -->
                <a>
                    <ul class="caseItem">
                        <img width="18%" src="https://blush.design/api/download?shareUri=ohIQ2_4rspulZPQE&bg=f5f5f5&w=800&h=800&fm=png" alt="">
                        <ul class="strBlock">

                            <li class="itemTitle">吃爆麥當勞</li>
                            <li class="firmName">麥當勞</li>

                            <ul class="btnBlock">
                                <btn-confirm
                                ></btn-confirm>
                                <btn-detail
                                ></btn-detail>
                            </ul>

                        </ul>
                    </ul>
                </a>
                <!--  -->
                <!-- <kol-invite-item
                    :caseItem="item"
                    :key="item.SponsoredContentId"
                    v-for="item in inviteCaseList" 
                ></kol-invite-item> -->

            </div>
            
            <h2>已發送邀請KOL</h2>
            <div class="mesArea alertArea applyArea scrollStyle">

                
                
            </div>

            <h2>確認洽談成功KOL</h2>
            <div class="mesArea alertArea applyArea scrollStyle">

                
                
            </div>
            <div></div>
            <h2 class="padUsing">確認洽談成功KOL</h2>
            
        </div>

    </div>

</template>

<script>
import KolChannelItem from '../components/kol-channelItem.vue';

export default {
    inject:['reload'],
    components: { 
        KolChannelItem 
    },
    methods:{
        applyCase(){
            const applyAPI = `http://kolperation.rocket-coding.com/api/KolAppliedTo/${this.caseId}`
            
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

            const contactFirmAPI = `http://kolperation.rocket-coding.com/api/PostMessagebyKOL`

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
            'dateStr'     : null,
            'favBool'     : null,
            'caseId'      : null,
            'msgId'       : null,
            'config'      : null,
            'userToken'   : null,
            'channelList' : [],
        }
    },
    created(){
        this.caseId     = this.$route.query.msg;
        this.userToken  = window.localStorage.getItem('token');
        this.config     = { headers: { Authorization: `Bearer ${this.userToken}` } };

        const detailAPI   = `http://kolperation.rocket-coding.com/api/GetOnGoingCoopSC/${this.caseId}`;
        const kolApplyAPI = `http://kolperation.rocket-coding.com/api/GetCompanyOnGoingCoopsDetailView`;

        this.$http
          .get(detailAPI,this.config)
          .then( res => {
              this.caseDetail  = res.data;
              this.dateStr     = this.caseDetail.EndTime.slice(0,10).replace(/-/g,".");
              this.favBool     = this.caseDetail.Favorite;
              this.channelList = this.caseDetail.Channels;

              console.log(res.data);
          })
          .catch( err => {
              console.error(err);
          });

        this.$http
          .get(kolApplyAPI,this.config)
          .then( res => {
              console.log('成功取得KOL邀請');
              console.log(res);
            //   console.log(res.data);
          })
          .catch( err => {
              console.error(err);
          });


    }

}
</script>