<template>
    <li class="firmName firmLable">
        <fa-icon 
          :icon="['fas', 'gamepad']" 
          class="icon lableIcon" 
          :key= item.TagIcon
          v-for="item in sectors"
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
        'sectors'
    ],
    methods:{
        test(){
            console.log(this.sectors);
        }
    }
}
</script>