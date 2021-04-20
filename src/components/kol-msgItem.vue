<template>
    <ul class="caseItem">
        <img width="20%" src="https://blush.design/api/download?shareUri=UJFfjsWIEtdRN23W&c=Hair_0%7E9b5120_Skin_0%7Ec26e5e&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{msgPack.Title}}</li>
            <li class="firmName">{{msgPack.Company}}</li>
            <li class="firmName firmMsg">{{msgPack.LastestMessage.Message}}</li>

        </ul>
        <router-link to="/kolplat/msgDialog">
        <li class="btn">
            <fa-icon icon="comment-dots" class="icon" />
            <span>回覆</span>
        </li>    
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'msgItem',
    props:[
        'msgPack',
    ]
}
</script>