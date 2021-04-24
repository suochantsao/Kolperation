<template>
    <li class="mediaRequest">
        
        <fa-icon 
            :icon="['fab', 'instagram']" 
            class="icon"
            :key= item.TagName
            v-for="item in channels"
            @click="test"

        />
        <!-- <fa-icon 
            :icon="['fab', 'facebook-square']" 
            class="icon" 
        />
        <fa-icon 
            :icon="['fab', 'youtube']" 
            class="icon" 
        />
        <fa-icon 
            :icon="['fas', 'podcast']" 
            class="icon" 
        />
        <fa-icon 
            :icon="['fab', 'blogger']" 
            class="icon" 
        /> -->
        
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