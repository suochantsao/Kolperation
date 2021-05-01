<template>
    <ul class="caseItem">
        <img width="22%" src="https://blush.design/api/download?shareUri=UJFfjsWIEtdRN23W&c=Hair_0%7E9b5120_Skin_0%7Ec26e5e&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.Username}}</li>
            
            <firm-plat-item
                :channels = "channelList"
            ></firm-plat-item>
            
            <li class="firmMsg sucessDate corpNum">過往合作次數： {{coopTimes}} 次</li>

        </ul>

        <ul class="sucessBtnBlock kolFavBlock">
            
            <btn-add-fav
                :contentId = "kolId"
                :definedId = "definedStr"
                :boolStr   = true
            >
            </btn-add-fav>
            
            <router-link
              :to="{ name: 'Firm_kolDetail', query: { KOLid: this.kolId, KOlguid: this.kolGuid }}"
            >
            <li class="btn">
                <fa-icon icon="list-ul" class="icon" />
                <span>詳細資料</span>
            </li>    
            </router-link>
            
        </ul>
    </ul>
</template>

<script>
// Component
import btnAddFav from './btn-addFav.vue'
import FirmPlatItem from './firm-platItem.vue';

export default {
    name: 'saveFirmItem',
    props:[
        'caseItem'
    ],
    components: { 
        btnAddFav,
        FirmPlatItem 
    },
    data(){
        return{
            'definedStr'  : 'kol',
            'kolId'       : null,
            'kolGuid'     : null,
            'coopTimes'   : null,
            'channelList' : [],
        }
    },
    created(){
        this.channelList = this.caseItem.Channels;
        this.kolId       = this.caseItem.KOLId;
        this.kolGuid     = this.caseItem.Guid;
        this.coopTimes   = this.caseItem.CoopTimes;
        console.log(this.coopTimes);
    }
    

}

</script>