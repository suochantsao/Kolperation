<template>
    <li class="favBtnBlock">
        <fa-icon 
            :icon="['far', 'heart']" 
            class="favIcon likeIcon" 
            :class="!favBool === false ? 'dpNone' : '' "
            @click="favAdd"
        />
        <fa-icon 
            :icon="['fas', 'heart']" 
            class="favIcon likeIcon selectedIcon" 
            :class="!favBool === true ? 'dpNone' : '' "
            @click="favRemove"
        />
    </li>
</template>

<script>
export default {
    name: 'btnAddFav',
    props:[
        'contentId',
        'definedId',
        'boolStr'
    ],
    methods:{
        favAdd(){
            this.commonFun();
            let addAPI = "";

            if(this.definedId === "company"){
                addAPI = `http://kolperation.rocket-coding.com/api/AddThisCompanyToMyFavorites/${this.contentId}`
            }
            else{
                addAPI = `http://kolperation.rocket-coding.com/api/AddThisSCToMyFavorites/${this.contentId}`
            }

            this.$http
              .put(addAPI,this.contentId,this.config)
              .then( res => {
                  console.log(res);
                  console.log("儲存成功");
                  this.successAlert('儲存成功')

              })
              .catch( err => {
                  console.error(err);
              })
              
        },
        favRemove(){
            this.commonFun();
            let removeAPI = "";

            if(this.definedId === "company"){
                removeAPI = `http://kolperation.rocket-coding.com/api/RemoveThisCompanyFromMyFavorites/${this.contentId}`
            }
            else{
                removeAPI = `http://kolperation.rocket-coding.com/api/RemoveThisSCFromMyFavorites/${this.contentId}`
            }

            this.$http
              .delete(removeAPI,this.config)
              .then( res => {
                  console.log(res);
                  console.log("移除成功");
                  this.successAlert('移除成功')
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
                timer: 1600
            })
        },
        commonFun(){
            this.favBool = !this.favBool;
            this.userToken = window.localStorage.getItem('token');
            this.config = { headers: { Authorization: `Bearer ${this.userToken}` } };
        }
    },
    data(){
        return{
            'favBool'  : this.boolStr,
            'config'   : null,
            'userToken': null,
        }
    }
}
</script>