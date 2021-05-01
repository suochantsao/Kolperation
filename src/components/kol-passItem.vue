<template>
    <ul class="caseItem">
        <img width="18%" :src="caseItem.CompanyLogo" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.CaseTitle}}</li>
            <li class="firmName">{{caseItem.CompanyName}}</li>
            <li class="firmMsg sucessDate corpNum cdDate">{{this.dateStr}} 洽談成功</li>

        </ul>

        <ul class="sucessBtnBlock saveCaseBtn">

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
            
            <router-link
              :to="{ name: 'Kol_sucessDetail', query: { msg: this.caseId }}"
            >
            <li class="btn">
                <fa-icon icon="list-ul" class="icon" />
                <span>案件詳情</span>
            </li>    
            </router-link>
            
        </ul>
    </ul>
</template>

<script>
export default {
    name: "kolPassItem",
    props:[
        'caseItem'
    ],
    data(){
        return{
            'caseId'   : null,
            'dateStr'  : null,
            'favBool'  : null,

        }
    },
    created(){
        this.dateStr    = this.caseItem.SuccessDate.slice(0,10).replace(/-/g,".");
        this.favBool    = this.caseItem.Favorite;
        this.caseId     = this.caseItem.SponsoredContentId;
    }

}
</script>