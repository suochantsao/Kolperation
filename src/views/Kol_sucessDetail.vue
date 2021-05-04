<template>
    <div class="consultDetailBlock msgDialogBlock scrollSpecial">
        <a @click="routerSet">
        <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="consultDetArea">
            <ul class="caseBasic">
                <img width="55%" :src="caseDetail.ProductPicture">                
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
                    :definedId = "definedStr"
                    :boolStr   = "favBool"
                >
                </btn-add-fav>

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

    </div>
</template>

<script>
// Components
import btnAddFav from '../components/btn-addFav.vue';
import KolChannelItem from '../components/kol-channelItem.vue';

export default {
    components: { 
        btnAddFav,
        KolChannelItem 
    },
    methods:{
        routerSet(){
            this.$router.back(-1);
        },
        linkToFirm(){
            this.$router.push({ 
            path: "/kolplat/firmdetail",
            query: {
                "firm": `${this.firmGuid}`,
                "company" : `${this.companyId}`,
            }
        });
        },
    },
    data(){
        return{
            'dateStr'     : null,
            'userToken'   : null,
            'config'      : null,
            'caseDetail'  : null,
            'caseId'      : null,
            'favBool'     : null,
            'companyId'   : null,
            'firmGuid'    : null,
            'channelList' : [],
            'definedStr' : "case",
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };
        this.caseId    = this.$route.query.msg;

        const detailAPI  = `https://kolperation.rocket-coding.com/api/GetSponsoredContent/${this.caseId}`;

        this.$http
          .get(detailAPI,this.config)
          .then( res => {
              this.caseDetail  = res.data;
              this.favBool     = this.caseDetail.Favorite;
              this.dateStr     = res.data.EndTime.slice(0,10).replace(/-/g,".");
              this.channelList = this.caseDetail.Channels;
              this.companyId   = this.caseDetail.CompanyId;
              this.firmGuid    = this.caseDetail.Guid;

              console.log(res.data);
              console.log(this.favBool);
          })
          .catch( err => {
              console.error(err);
          })
    }
}
</script>