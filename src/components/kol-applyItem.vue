<template>
    <ul class="caseItem">
        <img width="20%" src="https://blush.design/api/download?shareUri=UJFfjsWIEtdRN23W&c=Hair_0%7E9b5120_Skin_0%7Ec26e5e&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{caseItem.CaseTitle}}</li>
            <li class="firmName">{{caseItem.CompanyName}}</li>
            <li class="firmName statusStr">目前狀態：等候回覆中</li>

        </ul>
        <router-link to="/kolplat/sucessDetail">
        <li class="btn">
            <fa-icon icon="list-ul" class="icon" />
            <span>詳細資訊</span>
        </li>    
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'applyItem',
    props:[
        'caseItem'
    ],
}
</script>