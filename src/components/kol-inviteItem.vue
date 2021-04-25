<template>
    <router-link 
      :to="{ name: 'Kol_sucessDetail', query: { msg: this.confirmId }}"
    >
    <ul class="caseItem">
        <img width="18%" src="https://blush.design/api/download?shareUri=ohIQ2_4rspulZPQE&bg=f5f5f5&w=800&h=800&fm=png" alt="">
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