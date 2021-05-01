<template>
    <ul class="dialogDetail">
        <li 
        class="dialogStyle" 
        :class= "senderId === 1 ? 'dpNone' : '' " 
        >
            <img width="16%" :src="avatar" alt="">
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
        'eachMsg',
        'avatar'
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