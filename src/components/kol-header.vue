<template>
    <header class="kolHeader">
            <h1>
                <img class="logo" src="../assets/img/logo.svg">
                <span class="brandName">KOLperation</span>
            </h1>
            <ul class="tabBlock">

                <router-link to="/kolplat/msg">
                <li 
                  class="tab" 
                  :class="tabIndex === 0 ? 'selectTab' : '' "
                  @click="tabChange(0)"
                >
                    <fa-icon icon="envelope-open-text" class="icon" />
                    <span>訊息總覽</span>
                </li>    
                </router-link>

                <router-link to="/kolplat/consult">
                <li 
                  class="tab" 
                  :class="tabIndex === 1 ? 'selectTab' : '' "
                  @click="tabChange(1)"
                >
                    <fa-icon icon="comment-dollar" class="icon specIcon" />
                    <span>洽談中案件</span>
                </li>    
                </router-link>

                <router-link to="/kolplat/sucess">
                <li 
                  class="tab" 
                  :class="tabIndex === 2 ? 'selectTab' : '' "
                  @click="tabChange(2)"
                >
                    <fa-icon icon="check-square" class="icon" />
                    <span>成功洽談</span>
                </li>    
                </router-link>

                <router-link to="/kolplat/searchPlat">
                <li 
                  class="tab" 
                  :class="tabIndex === 3 ? 'selectTab' : '' "
                  @click="tabChange(3)"
                >
                    <fa-icon icon="search" class="icon" />
                    <span>案件搜尋</span>
                </li>    
                </router-link>

            </ul>
        </header>
</template>

<script>
export default {
    name: 'kolHeader',
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