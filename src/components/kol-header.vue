<template>
    <header class="kolHeader">
            <h1>
                <img class="logo" src="../assets/img/logo.svg">
                <span class="brandName">KOLperation</span>
            </h1>
            <ul class="tabBlock">
                <a href="#">
                <li class="tab selectTab">
                    <fa-icon icon="envelope-open-text" class="icon" />
                    <span>訊息總覽</span>
                </li>    
                </a>
                <a href="#">
                <li class="tab">
                    <fa-icon icon="comment-dollar" class="icon specIcon" />
                    <span>洽談中案件</span>
                </li>    
                </a>
                <a href="#">
                <li class="tab">
                    <fa-icon icon="check-square" class="icon" />
                    <span>成功洽談</span>
                </li>    
                </a>
                <a href="#">
                <li class="tab">
                    <fa-icon icon="search" class="icon" />
                    <span>案件搜尋</span>
                </li>    
                </a>
            </ul>
        </header>
</template>

<script>
export default {
    name: 'kolHeader',
}
</script>