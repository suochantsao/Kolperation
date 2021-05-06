<template>
    <ul class="caseItem">
        <img width="20%" :src="caseItem.CompanyLogo" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.CaseTitle}}</li>
            <li class="firmName">{{caseItem.CompanyName}}</li>
            <li class="firmName statusStr">目前狀態：{{currentStatus}}</li>

        </ul>

        <router-link :to="{ name: 'Kol_consultDetail', query: { msg: this.caseId }}">
        <li class="btn">
            <fa-icon icon="list-ul" class="icon" />
            <span>詳細資訊</span>
        </li>    
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'applyItem',
    props:[
        'caseItem'
    ],
    data(){
        return{
            'caseId'       : null,
            'coopStatusId' : null,
            'currentStatus': null, 
        }
    },
    created(){
        console.log(this.caseItem);
        this.caseId        = this.caseItem.SponsoredContentId;
        this.coopStatusId  = this.caseItem.CoopStatus;
        
        if( this.coopStatusId === 0){
            this.currentStatus = '等候回覆中'
        }
        else{
            this.currentStatus = '公司婉拒合作'
        }
        
    }
}
</script>