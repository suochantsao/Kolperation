<template>
    <ul class="caseItem">
        <img width="20%" src="https://blush.design/api/download?shareUri=UJFfjsWIEtdRN23W&c=Hair_0%7E9b5120_Skin_0%7Ec26e5e&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.Title}}</li>
            <li class="firmName ">案件負責人 {{caseItem.PersonInCharge}}</li>
            <li class="statusStr sucessDate">此案需求人數：{{caseItem.PeopleRequired}}人</li>

        </ul>

        <router-link :to="{ name: 'Kol_sucessDetail', query: { msg: this.caseId }}">
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
            'caseId': null,
        }
    },
    created(){
        // console.log(this.caseItem);
        this.caseId = this.caseItem.SponsoredContentId;
    }
}
</script>