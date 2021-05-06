<template>
    <li class="firmName firmLable">
        <fa-icon 
          :icon="['fas', item.TagIcon]" 
          class="icon lableIcon" 
          :key= item.TagIcon
          v-for="item in sectors"
          @click="test"
        />
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