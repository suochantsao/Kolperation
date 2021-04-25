<template>
    <a class="infoBtn" href="#">
        <li 
          class="btn"
          @click="refuseCase"
        >
            <fa-icon icon="times-circle" class="icon" />
            <span>婉拒邀請</span>
        </li>    
    </a>
</template>

<script>
export default {
    name: 'btnDetail',
    props: [
        'caseId'
    ],
    methods:{
        refuseCase(){
            // console.log(this.caseId);
            this.userToken = window.localStorage.getItem('token');
            this.config = { headers: { Authorization: `Bearer ${this.userToken}` } };

            const refuseAPI = `http://kolperation.rocket-coding.com/api/KolRefused/${this.caseId}`
            
            this.$http
              .delete(refuseAPI,this.config)
              .then( res => {
                  console.log(res);
                  console.log("拒絕合作成功");
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