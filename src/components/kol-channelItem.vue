<template>
    <li class="mediaRequest">
        
        <fa-icon 
            :icon="[ item.FAid , item.TagName ]" 
            class="icon"
            :key= item.TagName
            v-for="item in channels"
            @click="test"

        />
        
    </li>
</template>

<script>
export default {
    name: 'channelItem',
    props:[
        'channels'
    ],
    methods:{
        test(){
            console.log(this.channels);
        }
    }

    
}
</script>