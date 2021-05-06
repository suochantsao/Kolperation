<template>
    <ul class="caseItem">
        <img width="22%" :src="caseItem.CompanyLogo" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.Company}}</li>
            
            <kol-sector-item
                :sectors = "sectorList"
            >
            </kol-sector-item>
            
            <li class="firmMsg sucessDate corpNum">過往合作次數： {{caseItem.CoopTimes}} 次</li>

        </ul>

        <ul class="sucessBtnBlock">
            
            <btn-add-fav
                :contentId = "caseId"
                :definedId = "definedStr"
                :boolStr   = true
            >
            </btn-add-fav>
            
            <router-link
              :to="{ name: 'Kol_firmDetail', query: { firm: this.firmId, company: this.caseId }}"
            >
            <li class="btn">
                <fa-icon icon="list-ul" class="icon" />
                <span>公司詳情</span>
            </li>    
            </router-link>
            
        </ul>
    </ul>
</template>

<script>
// Component
import btnAddFav from './btn-addFav.vue'
import KolSectorItem from './kol-sectorItem.vue';

export default {
    name: 'saveFirmItem',
    props:[
        'caseItem'
    ],
    components: { 
        btnAddFav,
        KolSectorItem 
    },
    data(){
        return{
            'definedStr' : 'company',
            'caseId'     : null,
            'firmId'     : null,
            'sectorList' : [],

        }
    },
    created(){
        this.caseId     = this.caseItem.CompanyId;
        this.sectorList = this.caseItem.Sectors;
        this.firmId     = this.caseItem.Guid

        // console.log(this.caseId);
    }
    

}

</script>