<template>
    <router-link 
      :to="{ name: 'Kol_consultDetail', query: { msg: this.confirmId }}"
    >
    <ul class="caseItem">
        <img width="18%" :src="caseItem.CompanyLogo" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.CaseTitle}}</li>
            <li class="firmName">{{caseItem.CompanyName}}</li>

            <ul class="btnBlock">
                <btn-confirm
                  :caseId = "confirmId"
                ></btn-confirm>
                <btn-detail
                  :caseId = "delId"
                ></btn-detail>
            </ul>

        </ul>
    </ul>
    </router-link>
</template>

<script>
// Components
import btnConfirm from '../components/btn-confirm.vue'
import btnDetail from '../components/btn-detail.vue'

export default {
    name: 'inviteItem',
    props:[
        'caseItem'
    ],
    components:{
        btnConfirm,
        btnDetail
    },
    data(){
        return{
            'confirmId': null,
            'delId'    : null
        }
    },
    created(){
        this.confirmId = this.caseItem.SponsoredContentId;
        this.delId     = this.caseItem.CoopId;

    }
}
</script>