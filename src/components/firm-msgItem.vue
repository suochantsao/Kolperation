<template>
    <ul class="caseItem">
        <img width="20%" :src="msgInfo.KOLavatar" alt="">
        <ul class="strBlock">

            <li class="itemTitle">{{msgInfo.Title}}</li>
            <li class="firmName">{{msgInfo.Username}}</li>
            <li class="firmName firmMsg"></li>

        </ul>
        <router-link 
          :to="{ name: 'Firm_msgDialog', query: { msg: this.msgId }}"
        >
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
        'msgInfo',
    ],
    data(){
        return{
            msgId : this.msgInfo.MsgId,
        }
    }

}
</script>