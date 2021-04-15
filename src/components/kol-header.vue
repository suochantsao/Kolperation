<template>
    <header class="kolHeader">
            <h1>
                <img class="logo" src="../assets/img/logo.svg">
                <span class="brandName">KOLperation</span>
            </h1>
            <ul class="tabBlock">
                <router-link to="/kolplat/msg">
                <li class="tab selectTab">
                    <fa-icon icon="envelope-open-text" class="icon" />
                    <span>訊息總覽</span>
                </li>    
                </router-link>
                <router-link to="/kolplat/consult">
                <li class="tab">
                    <fa-icon icon="comment-dollar" class="icon specIcon" />
                    <span>洽談中案件</span>
                </li>    
                </router-link>
                <router-link to="/kolplat/sucess">
                <li class="tab">
                    <fa-icon icon="check-square" class="icon" />
                    <span>成功洽談</span>
                </li>    
                </router-link>
                <router-link to="/kolplat/search">
                <li class="tab">
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
}
</script>