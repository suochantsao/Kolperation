<template>
    <li class="firmName firmLable">
        <fa-icon 
          :icon="['fab', item.TagName]" 
          class="icon lableIcon" 
          :key= item.TagName
          v-for="item in channels"
          @click="test"
        />
        <!-- <fa-icon icon="building" class="icon lableIcon" />
        <fa-icon icon="video" class="icon lableIcon" /> -->
    </li>
</template>

<script>
export default {
    name: 'sectorItem',
    props:[
        'channels'
    ],
    methods:{
        test(){
            console.log(this.sectors);
        }
    }
}
</script>