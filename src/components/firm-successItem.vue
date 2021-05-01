<template>
    <ul class="caseItem" @click="routerPage">
        <img width="18%" :src="caseItem.ProductPic" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.CaseTitle}}</li>
            <li class="firmName">{{caseItem.CaseDetail}}</li>
            <li class="firmMsg sucessDate">成功洽談合作數：{{this.caseItem.PeopleCoopWithNum}} 人 </li>

        </ul>
        <ul class="sucessBtnBlock">
            
            <li class="favBtnBlock">
                <fa-icon 
                    :icon="['far', 'heart']" 
                    class="favIcon likeIcon" 
                    :class="!favBool === false ? 'dpNone' : '' "
                />
            </li>

            <a>
            <li 
              class="btn passMsg"
              @click="routerPage"
            >
                <fa-icon icon="comment-dots" class="icon" />
                <span>詳細內容</span>
            </li>    
            </a>
            
        </ul>
    </ul>
</template>

<script>

export default {
  
    name: 'successItem',
    props:[
        'caseItem'
    ],
    methods: { 
        routerPage(){
            this.$router.push({ path: `/firmplat/successdetail?msg=${this.caseId}`})
        }
    },
    data(){
        return{
            'dateStr'  : null,
            'caseId'   : null,
            'favBool'  : null,
            'msgId'    : null,
        }
    },
    created(){
        this.dateStr = this.caseItem.SuccessDate.slice(0,10).replace(/-/g,".");
        this.caseId  = this.caseItem.SponsoredContentId;
        this.favBool = this.caseItem.Favorite;
        this.msgId   = this.caseItem.MsgId;

    }
}
</script>