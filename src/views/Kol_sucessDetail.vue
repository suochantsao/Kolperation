<template>
    <div class="consultDetailBlock msgDialogBlock scrollSpecial">
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
                    <p>{{caseDetail.Detail}}<br/>
                        1.文章以正面回饋為主，體驗中如有任何建議請直接反應<br/>
                        2.標題上請勿出現類似邀稿，試用文字<br/>
                        3.文章連結與圖文須同意我們作為廣告連結(Google & FB) 或使用.修改或重製您提供的照片.影音等素材或引用部分內容使用於後續銷售宣傳 
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

    </div>
</template>

<script>
import btnAddFav from '../components/btn-addFav.vue';
import KolChannelItem from '../components/kol-channelItem.vue';

export default {
    data(){
        return{
            'dateStr'     : null,
            'userToken'   : null,
            'config'      : null,
            'caseDetail'  : null,
            'caseId'      : null,
            'favBool'     : null,
            'channelList' : [],
            'definedStr' : "case",
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };
        this.caseId    = this.$route.query.msg;

        // console.log(this.);

        const detailAPI  = `http://kolperation.rocket-coding.com/api/GetSponsoredContent/${this.caseId}`;

        this.$http
          .get(detailAPI,this.config)
          .then( res => {
              this.caseDetail = res.data;
              this.favBool    = this.caseDetail.Favorite;
              this.dateStr    = res.data.EndTime.slice(0,10).replace(/-/g,".");
              this.channelList = this.caseDetail.Channels;

              console.log(res.data);
              console.log(this.favBool);
          })
          .catch( err => {
              console.error(err);
          })
    },
    components: { 
        btnAddFav,
        KolChannelItem 
    },
    methods:{
        routerSet(){
            this.$router.back(-1);
        }
    }


}
</script>