<template>
    <ul class="caseItem">
        <img width="22%" :src="caseItem.KOLavatar" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.Username}}</li>
            
            <firm-plat-item
                :channels = "channelList"
            ></firm-plat-item>
            
            <li class="firmMsg sucessDate corpNum">過往合作次數： {{caseItem.CoopTimes}} 次</li>

        </ul>

        <ul class="sucessBtnBlock kolFavBlock">
            
            <btn-add-fav
                :contentId = "kolId"
                :definedId = "definedStr"
                :boolStr   = "saveBool"
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
            'saveBool'    : null,
            'kolId'       : null,
            'kolGuid'     : null,
            'channelList' : [],

        }
    },
    created(){
        this.channelList = this.caseItem.Channels;
        this.kolId       = this.caseItem.KolId;
        this.saveBool    = this.caseItem.Favorite;
        this.kolGuid     = this.caseItem.Guid;

        // console.log(this.kolId);
    }
    

}

</script>