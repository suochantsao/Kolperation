<template>
    <div id="app" class="kolPlat firmPlat">
       <firm-header></firm-header>
       <div class="kolContent firmContent">
           <firm-navbar
            :caseCount="casesNum" 
            :name="userName"
           ></firm-navbar>

           <router-view />

        </div>
    </div>
</template>

<script>
// Components
import FirmHeader from '../components/firm-header.vue'
import FirmNavbar from '../components/firm-navbar.vue'

export default {
    name: 'Firm',
    
    components: {
        FirmHeader,
        FirmNavbar 
    },
    data(){
        return{
        'casesNum': {
            goingCases   : null,
            successCases : null
        },
        'userToken': null,
        'userName': null,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');

        const casesAPI = 'http://kolperation.rocket-coding.com/api/GetCasesNum'
        const firmAPI  = 'http://kolperation.rocket-coding.com/api/GetCompanyforEditing'
        const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

        this.$http
        .get(casesAPI,config)
        .then( res => {
            console.log('CASE NUM GET SUCCEED');
            this.casesNum.goingCases   = res.data.OnGoingCases;
            this.casesNum.successCases = res.data.SuccessfulCases; 
            // console.log(res);
        })
        .catch( err => {
            console.error(err);
        });

        this.$http
        .get(firmAPI,config)
        .then( res => {
            console.log(res.data);
            this.userName = res.data.Company;
        })
        .catch( err => {
            console.error(err);
        });

    }
}

</script>