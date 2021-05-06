<template>
    <header class="kolHeader firmHeader">
            <h1>
                <img class="logo" src="../assets/img/logo.svg">
                <router-link class="txtBlue" to="/">
                    <span class="brandName">KOLperation</span>
                </router-link>
            </h1>
            <ul class="tabBlock">

                <router-link to="/firmplat/msg">
                <li 
                  class="tab" 
                  :class="tabIndex === 0 ? 'selectTab' : '' "
                  @click="tabChange(0)"
                >
                    <fa-icon icon="envelope-open-text" class="icon" />
                    <span>訊息總覽</span>
                </li>    
                </router-link>

                <router-link to="/firmplat/consult">
                <li 
                  class="tab" 
                  :class="tabIndex === 1 ? 'selectTab' : '' "
                  @click="tabChange(1)"
                >
                    <fa-icon icon="comment-dollar" class="icon specIcon" />
                    <span>執行中案件</span>
                </li>    
                </router-link>

                <router-link to="/firmplat/success">
                <li 
                  class="tab" 
                  :class="tabIndex === 2 ? 'selectTab' : '' "
                  @click="tabChange(2)"
                >
                    <fa-icon icon="check-square" class="icon" />
                    <span>已完結案件</span>
                </li>    
                </router-link>

                <router-link to="/firmplat/searchplat">
                <li 
                  class="tab" 
                  :class="tabIndex === 3 ? 'selectTab' : '' "
                  @click="tabChange(3)"
                >
                    <fa-icon icon="search" class="icon" />
                    <span>搜尋KOL</span>
                </li>    
                </router-link>

            </ul>
        </header>
</template>

<script>
export default {
    name: 'FirmHeader',
    methods:{
        tabChange(index){
            this.tabIndex = index;
        }
    },
    data(){
        return{
            'tabIndex': 0
        }
    }
}
</script>