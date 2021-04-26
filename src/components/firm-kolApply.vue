<template>
    <ul class="caseItem" >
        <img width="22%" src="https://blush.design/api/download?shareUri=UJFfjsWIEtdRN23W&c=Hair_0%7E9b5120_Skin_0%7Ec26e5e&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{kolInfo.Username}}</li>
            <li class="firmMsg sucessDate corpNum">過往合作次數： 1 次</li>
            
        </ul>

        <ul class="btnBlock">
            <a class="confirmBtn">
            <li 
              class="btn confirmBtn"
              @click="confirmCase"
            >
                <fa-icon icon="check-circle" class="icon" />
                <span>確認合作</span>
            </li>   
            </a> 
            <a class="infoBtn">
                <li 
                class="btn"
                @click="refuseKol"
                >
                    <fa-icon icon="times-circle" class="icon" />
                    <span>婉拒合作</span>
                </li>    
            </a>
        </ul>

    </ul>
</template>

<script>
// Components
export default {
    inject:['reload'],
    props:[
        'kolInfo',
        'sponId'
    ],
    components: { 
    },
    methods:{
        refuseKol(){

            const refuseAPI = `http://kolperation.rocket-coding.com/api/CompanyRefused/${this.coopId}`

            this.$http
              .delete(refuseAPI,this.config)
              .then( res => {
                  console.log(res);
                  console.log("拒絕合作成功");
                  this.successAlert('已拒絕合作');
                  this.reload();
              })
              .catch( err => {
                  console.error(err);
              })

        },
        confirmCase(){

            const confirmAPI = `http://kolperation.rocket-coding.com/api/CompanyInvited/${this.kolId}`
            
            let confirmObj = {
                "SponsoredContentId": this.caseId,
            }

            this.$http
              .put(confirmAPI,confirmObj,this.config)
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
                timer: 1500
            })
        }
    },
    data(){
        return{
            'channelList':'',
            'config'   : null,
            'userToken': null,
            'coopId'   : null,
            'kolId'    : null,
            'caseId'   : null,
        }
    },
    created(){
        this.coopId    = this.kolInfo.CoopId;
        this.kolId     = this.kolInfo.KOLId;
        this.caseId    = this.sponId;
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };
        console.log(this.kolInfo);
        console.log(this.coopId);
    }
}
</script>