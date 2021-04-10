<template>

    <div id="app">
        <span class="titleDescrip">搜尋結果</span>

        <ul class="resultBlock contentBlock">
            <li class="resultItem">
                <fa-icon icon="utensils" class="icon " />
                <span class="caseTitle">德國航母 TUNE PRO變頻智慧調理機</span>
                <router-link to="/login">
                    <span class="caseDescrip">合作詳情</span>
                </router-link>
            </li>
            <li class="resultItem">
                <fa-icon icon="utensils" class="icon" />
                <span class="caseTitle"> Snow Bear 智效奶瓶消毒烘乾鍋體驗</span>
                <router-link to="/login">
                    <span class="caseDescrip">合作詳情</span>
                </router-link>
            </li>
        </ul>
        <router-link to="/login">
            <li class="moreBtn">查看更多搜尋結果</li>
        </router-link>
    </div>
    
</template>

<script>
export default {
    name: 'trial_result',

}
</script>

<style scoped>
/* @import "/node_modules/bootstrap/dist/css/bootstrap.min.css"; */
</style>
