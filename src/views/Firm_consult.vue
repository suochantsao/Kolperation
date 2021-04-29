<template>
    <div class="kolMesBlock firmMsgBlock">
        <ul class="topNavArea">
            <h2>執行中案件</h2>
            <li class="addCaseBtn">
                <fa-icon icon="plus-circle" class="icon" />
                <span
                  @click="casePage"
                >新增案件</span>
            </li>
        </ul>
        <div class="mesArea alertArea applyArea scrollWhite">

            <firm-work-item
                :caseItem="item"
                :key="item.SponsoredContentId"
                v-for="item in workingCaseList" 
            ></firm-work-item>
            
        </div>
    </div>
        
</template>

<script>
// Components
import FirmWorkItem from '../components/firm-workItem.vue';


export default {
    components: {
        FirmWorkItem 
    },
    methods:{
        casePage(){
            this.$router.push({ path: `/firmplat/addcase`})
        }
    },
    data(){
        return{
            'workingCaseList': [],
            'userToken': null,
        }
    },
    created(){
        this.userToken  = window.localStorage.getItem('token');
        const caseAPI   = 'http://kolperation.rocket-coding.com/api/GetSponsoredContentsByCompany';
        const config    = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
          .get( caseAPI, config)
          .then( res => {
              this.workingCaseList = res.data
              console.log(this.workingCaseList);
          })
          .catch( err => {
              console.error(err);
          });

    }
    
    
}
</script>
