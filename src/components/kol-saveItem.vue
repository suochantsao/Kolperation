<template>
    <ul class="caseItem">
        <img width="18%" :src="caseItem.ProductPicture" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.Title}}</li>
            <li class="firmName">{{caseItem.Company}}</li>
            <li class="firmMsg sucessDate corpNum cdDate">案件截止日：{{this.dateStr}}</li>

        </ul>

        <ul class="sucessBtnBlock saveCaseBtn">
            <btn-add-fav
              :contentId = "caseId"
              :definedId = "definedStr"
              :boolStr   = "saveBool"

            ></btn-add-fav>

            <router-link
              :to="{ name: 'Kol_consultDetail', query: { msg: this.caseId }}"
            >
            <li class="btn">
                <fa-icon icon="list-ul" class="icon" />
                <span>詳細資訊</span>
            </li>    
            </router-link>
            
        </ul>
    </ul>
</template>

<script>
import btnAddFav from './btn-addFav.vue';
export default {
    name: 'kol-save-item',
    props:[
        'caseItem'
    ],
    data(){
        return{
            'dateStr'    : null,
            'caseId'     : null,
            'saveBool'   : null,
            'definedStr' : "case",
        }
    },
    components: { 
        btnAddFav 
    },
    created(){
        this.dateStr    = this.caseItem.EndTime.slice(0,10).replace(/-/g,".");
        this.caseId     = this.caseItem.SponsoredContentId;
        console.log(this.caseId);

        if ( this.caseItem.Favorite === undefined ){
            this.saveBool = true;
        }
        else{
            this.saveBool   = this.caseItem.Favorite;
        }
    }
    
}
</script>