<template>
    <li class="favBtnBlock kolFavBlock">
        <fa-icon 
            :icon="['far', 'heart']" 
            class="favIcon likeIcon" 
            :class="!boolStr === false ? 'dpNone' : '' "
            @click="favAdd"
        />
        <fa-icon 
            :icon="['fas', 'heart']" 
            class="favIcon likeIcon selectedIcon" 
            :class="!boolStr === true ? 'dpNone' : '' "
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
            console.log(this.contentId);

            let addAPI = `https://kolperation.rocket-coding.com/api/AddThisSCToMyFavorites/${this.contentId}`;

            if( this.definedId === "company" ){
                addAPI = `https://kolperation.rocket-coding.com/api/AddThisCompanyToMyFavorites/${this.contentId}`
            }
            if (this.defineId === "case"){
                addAPI = `https://kolperation.rocket-coding.com/api/AddThisSCToMyFavorites/${this.contentId}`
            }
            if (this.definedId === "kol"){
                addAPI = `https://kolperation.rocket-coding.com/api/AddThisKOLToMyFavorites/${this.contentId}`
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
            console.log(this.contentId);
            
            let removeAPI = "";

            if( this.definedId === "company" ){
                removeAPI = `https://kolperation.rocket-coding.com/api/RemoveThisCompanyFromMyFavorites/${this.contentId}`
            }
            if ( this.definedId === "case" ){
                removeAPI = `https://kolperation.rocket-coding.com/api/RemoveThisSCFromMyFavorites/${this.contentId}`
            }
            if( this.definedId === "kol" ){
                removeAPI = `https://kolperation.rocket-coding.com/api/RemoveThisKOLFromMyFavorites/${this.contentId}`
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
            this.boolStr = !this.boolStr;
            this.userToken = window.localStorage.getItem('token');
            this.config = { headers: { Authorization: `Bearer ${this.userToken}` } };
        }
    },
    data(){
        return{
            'config'   : null,
            'userToken': null,
        }
    },
    created(){
    }
}
</script>