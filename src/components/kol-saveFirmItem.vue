<template>
    <ul class="caseItem">
        <img width="22%" src="https://blush.design/api/download?shareUri=UJFfjsWIEtdRN23W&c=Hair_0%7E9b5120_Skin_0%7Ec26e5e&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.Company}}</li>
            <li class="firmName firmLable">
                <fa-icon icon="gamepad" class="icon lableIcon" />
                <fa-icon icon="building" class="icon lableIcon" />
                <fa-icon icon="video" class="icon lableIcon" />
            </li>
            <li class="firmMsg sucessDate corpNum">過往合作次數： {{caseItem.CoopTimes}} 次</li>

        </ul>

        <ul class="sucessBtnBlock">
            
            <btn-add-fav
                :contentId = "caseId"
                :definedId = "definedStr"
            >
            </btn-add-fav>
            
            <a href="#">
            <li class="btn">
                <fa-icon icon="list-ul" class="icon" />
                <span>公司詳情</span>
            </li>    
            </a>
            
        </ul>
    </ul>
</template>

<script>
// Component
import btnAddFav from './btn-addFav.vue'

export default {
    name: 'saveFirmItem',
    props:[
        'caseItem'
    ],
    components: { 
        btnAddFav 
    },
    data(){
        return{
            'caseId' : null,
            'definedStr' : 'company',

        }
    },
    created(){
        this.caseId  = this.caseItem.CompanyId;
    }
    

}

</script>