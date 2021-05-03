<template>
    <li 
      class="avatar"
      @click="linkToDetail"
    >
        <img width="100%" :src="kolInfo.KOLavatar" alt="" srcset="">
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