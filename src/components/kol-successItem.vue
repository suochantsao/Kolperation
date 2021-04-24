<template>
    <!-- <router-link :to="{ name: 'Kol_sucessDetail', query: { msg: this.caseId }}"> -->
    <ul class="caseItem" @click="routerPage">
        <img width="18%" src="https://blush.design/api/download?shareUri=ohIQ2_4rspulZPQE&bg=f5f5f5&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.CaseTitle}}</li>
            <li class="firmName">{{caseItem.CompanyName}}</li>
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

            <a>
            <li 
              class="btn passMsg"
              @click="routerPage"
            >
                <fa-icon icon="comment-dots" class="icon" />
                <span>洽談紀錄</span>
            </li>    
            </a>
            
        </ul>
    </ul>
    <!-- </router-link> -->
</template>

<script>

export default {
  
    name: 'successItem',
    props:[
        'caseItem'
    ],
    methods: { 
        routerPage(){
            console.log(this.msgId);
            if( this.msgId === 0 ){
                this.$swal({
                    icon: 'question',
                    title: '沒有過往洽談紀錄',
                    text: '您並沒有和該廠商洽談過唷！',
                })
                this.$router.push({ path: `/kolplat/sucessDetail?msg=${this.caseId}`})

            }
            else{
                this.$router.push({ path: `/kolplat/msgDialog?msg=${this.msgId}`})
            }

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
        // console.log(this.caseItem);

    }
}
</script>