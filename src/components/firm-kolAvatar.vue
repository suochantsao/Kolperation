<template>
    <li 
      class="avatar"
      @click="linkToDetail"
    >
        <img width="100%" src="https://blush.design/api/download?shareUri=lWYd9h26cKmtH3pi&c=Hair_0%7E9b5120_Skin_0%7Ef6cbc3&w=500&h=500&fm=png" alt="" srcset="">
        <span>{{kolInfo.Username}}</span>
    </li>
</template>

<script>

export default {
    name: 'kolAvatar',
    props:[
        'kolInfo',
    ],
    methods:{
        linkToDetail(){
            this.$router.push({ 
            path: "/firmplat/koldetail",
            query: {
                "KOlguid": this.kolGuid
                }
            })
        }
    },
    data(){
        return{
            'kolDetail': this.kolInfo,
            'kolGuid'  : this.kolInfo.Guid,
        }
    },
    created(){
        console.log(this.kolGuid);
    }
}
</script>