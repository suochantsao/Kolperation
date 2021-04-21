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
        'contentId'
    ],
    methods:{
        favAdd(){
            this.commonFun();
            
            const addAPI = `http://kolperation.rocket-coding.com/api/AddThisSCToMyFavorites/${this.contentId}`
            this.$http
              .put(addAPI,this.contentId,this.config)
              .then( res => {
                  console.log(res);
              })
              .catch( err => {
                  console.error(err);
              })
              
        },
        favRemove(){
            this.commonFun();

            const removeAPI = `http://kolperation.rocket-coding.com/api/RemoveThisSCFromMyFavorites/${this.contentId}` 
            this.$http
              .delete(removeAPI,this.config)
              .then( res => {
                  console.log(res);
              })
              .catch( err => {
                  console.error(err);
              })

        },
        commonFun(){
            this.favBool = !this.favBool;
            this.userToken = window.localStorage.getItem('token');
            this.config = { headers: { Authorization: `Bearer ${this.userToken}` } };
            console.log(this.contentId);
        }
    },
    data(){
        return{
            'favBool'  : true,
            'userToken': null,
            'config'   : null,
        }
    }
}
</script>