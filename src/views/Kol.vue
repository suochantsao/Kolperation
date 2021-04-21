<template>
    <div id="app" class="kolPlat">
        <kol-header></kol-header>
        <div class="kolContent">
            <kol-navbar 
              :caseCount="casesNum" 
              :name="userName"
            ></kol-navbar>
            <router-view />
        </div>
    </div>
</template>

<script>
// Components
import kolHeader from '../components/kol-header.vue'
import KolNavbar from '../components/kol-navbar.vue'

export default {
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
  components: { 
    kolHeader,
    KolNavbar,
  },
  created(){
      this.userToken = window.localStorage.getItem('token');

      const casesAPI = 'http://kolperation.rocket-coding.com/api/GetCasesNum'
      const userAPI  = 'http://kolperation.rocket-coding.com/api/GetKOLforEditing'
      const config   = { headers: { Authorization: `Bearer ${this.userToken}` } };

      this.$http
        .get(casesAPI,config)
        .then( res => {
          console.log('CASE NUM GET SUCCEED');
          // console.log(res);
          this.casesNum.goingCases   = res.data.OnGoingCases;
          this.casesNum.successCases = res.data.SuccessfulCases; 
        })
        .catch( err => {
          console.error(err);
        });

      this.$http
        .get(userAPI,config)
        .then( res => {
          console.log('USER INFO GET SUCCEED');
          
          this.userName = res.data[0].AccountId;
          console.log(res.data);
          // console.log(this.userName);
        })
        .catch( err => {
          console.error(err);
        });
    
  }
  
}
</script>
