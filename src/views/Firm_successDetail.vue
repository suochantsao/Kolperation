<template>
    <div class="consultDetailBlock msgDialogBlock firmConsultBlock scrollSpecial">
        <a @click="routerSet">
        <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="consultDetArea">
            <ul class="caseBasic">
                <img width="60%" :src="caseDetail.Picture">                
                <ul class="conditionBlock">
                    <h1>{{caseDetail.Title}}</h1>
                    <li>{{caseDetail.Company}}</li>
                    <li class="budget">合作預算： ${{caseDetail.Budget}}</li>
                    <li class="needsNum">截止日期： {{dateStr}}</li>

                    <kol-channel-item
                        :channels = "channelList"
                    ></kol-channel-item>
                </ul>
                
            </ul>

            <ul class="caseInfo">
                <ul class="caseDetail">
                    <li class="blockTitle">合作內容</li>
                    <p>{{caseDetail.Detail}}</p>
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
        
        <div class="kolMesBlock firmManageBlock ">

            <h2>確認洽談成功KOL</h2>
            <div class="mesArea alertArea applyArea scrollGrey">

                <firm-kol-avatar
                  :kolInfo = "item"
                  :key="item.SponsoredContentId"
                  v-for="item in coopKolList"
                ></firm-kol-avatar>
                
            </div>
            
        </div>

    </div>

</template>

<script>
import FirmKolAvatar from '../components/firm-kolAvatar.vue';
import KolChannelItem from '../components/kol-channelItem.vue';

export default {
    inject:['reload'],
    components: { 
        KolChannelItem,
        FirmKolAvatar,
    },
    methods:{
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
            'caseDetail'   : null,
            'dateStr'      : null,
            'favBool'      : null,
            'caseId'       : null,
            'msgId'        : null,
            'config'       : null,
            'userToken'    : null,
            'applyKolList' : [],
            'coopKolList'  : [],
            'channelList'  : [],
        }
    },
    created(){
        this.caseId     = this.$route.query.msg;
        this.userToken  = window.localStorage.getItem('token');
        this.config     = { headers: { Authorization: `Bearer ${this.userToken}` } };

        const detailAPI   = `http://kolperation.rocket-coding.com/api/GetOnGoingCoopSC/${this.caseId}`;
        const successAPI = `http://kolperation.rocket-coding.com/api/GetSuccessCoopSC/${this.caseId}`;

        this.$http
          .get(detailAPI,this.config)
          .then( res => {
              this.caseDetail   = res.data;
              this.dateStr      = this.caseDetail.EndTime.slice(0,10).replace(/-/g,".");
              this.favBool      = this.caseDetail.Favorite;
              this.channelList  = this.caseDetail.Channels;
              this.applyKolList = this.caseDetail.PeopleApplied;
              this.coopKolList  = this.caseDetail.PeopleCoopWith;

              console.log(res.data);
          })
          .catch( err => {
              console.error(err);
          });

        this.$http
          .get(successAPI,this.config)
          .then( res => {
              console.log('取得成功案件的詳細資料');
              console.log(res);
          })
          .catch( err => {
              console.error(err);
          });
    }

}
</script>