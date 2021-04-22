<template>
    <a class="confirmBtn" href="#">
    <li 
      class="btn"
      @click="confirmCase"
    >
        <fa-icon icon="check-circle" class="icon" />
        <span>確認合作</span>
    </li>    
    </a>
</template>

<script>
export default {
    name: 'btnConfirm',
    props: [
        'caseId'
    ],
    methods:{
        confirmCase(){
            // console.log(this.caseId);
            this.userToken = window.localStorage.getItem('token');
            this.config = { headers: { Authorization: `Bearer ${this.userToken}` } };

            const confirmAPI = `http://kolperation.rocket-coding.com/api/KolAppliedTo/${this.caseId}`
            
            this.$http
              .put(confirmAPI,this.caseId,this.config)
              .then( res => {
                  console.log(res);
                  console.log("確認合作成功");
              })
              .catch( err => {
                  console.error(err);
              })
            
        }
    },
    data(){
        return{
            'config'   : null,
            'userToken': null,
        }
    }
}
</script>