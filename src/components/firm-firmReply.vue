<template>
    <ul class="dialogDetail">
        <li 
        class="dialogStyle" 
        :class= "senderId === 1 ? 'dpNone' : '' " 
        >
            <img width="16%" src="https://blush.design/api/download?shareUri=UJFfjsWIEtdRN23W&c=Hair_0%7E9b5120_Skin_0%7Ec26e5e&w=800&h=800&fm=png" alt="">
            <p>{{eachMsg.Message}}</p>
        </li>

        <li 
        class="dialogStyle myReply"
        :class= "senderId === 0 ? 'dpNone' : '' " 
        >
            <p>{{eachMsg.Message}}</p>
        </li>
                
    </ul>
</template>

<script>
export default {
    name: 'kolReply',
    props:[
        'eachMsg'
    ],
    data(){
        return{
            'senderId': null,
        }
    },
    created(){
        this.senderId = this.eachMsg.Sender;
    }
}

</script>