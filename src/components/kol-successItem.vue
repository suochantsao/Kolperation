<template>
    <ul class="caseItem">
        <img width="18%" src="https://blush.design/api/download?shareUri=ohIQ2_4rspulZPQE&bg=f5f5f5&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.CaseTitle}}</li>
            <li class="firmName">{{caseItem.CaseDetail}}</li>
            <li class="firmMsg sucessDate">{{this.dateStr}} 洽談成功</li>

        </ul>
        <ul class="sucessBtnBlock">
            
            <li class="favBtnBlock">
                <fa-icon 
                    :icon="['far', 'heart']" 
                    class="favIcon likeIcon" 
                    :class="!favBool === false ? 'dpNone' : '' "
                />
                <fa-icon 
                    :icon="['fas', 'heart']" 
                    class="favIcon likeIcon selectedIcon" 
                    :class="!favBool === true ? 'dpNone' : '' "
                />
            </li>
            
            <router-link to="/kolplat/msgDialog">
            <li class="btn">
                <fa-icon icon="comment-dots" class="icon" />
                <span>洽談紀錄</span>
            </li>    
            </router-link>
        </ul>
    </ul>
</template>

<script>

export default {
  
    name: 'successItem',
    props:[
        'caseItem'
    ],
    components: { 
    },
    data(){
        return{
            'dateStr'  : null,
            'caseId'   : null,
            'favBool'  : null,

        }
    },
    created(){
        this.dateStr    = this.caseItem.SuccessDate.slice(0,10).replace(/-/g,".");
        this.caseId     = this.caseItem.SponsoredContentId;
        this.favBool    = this.caseItem.Favorite;
        // console.log(this.favBool);

    }
}
</script>