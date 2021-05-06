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
    inject:['reload'],
    props: [
        'caseId'
    ],
    methods:{
        confirmCase(){
            this.userToken = window.localStorage.getItem('token');
            this.config = { headers: { Authorization: `Bearer ${this.userToken}` } };

            const confirmAPI = `https://kolperation.rocket-coding.com/api/KolAppliedTo/${this.caseId}`
            
            this.$http
              .put(confirmAPI,this.caseId,this.config)
              .then( res => {
                  console.log(res);
                  console.log("確認合作成功");
                  this.successAlert('確認合作成功')
                  this.reload();
              })
              .catch( err => {
                  console.error(err);
              })
            
        },
        successAlert(str){
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: str,
                showConfirmButton: false,
                timer: 1800
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