<template>
    <li class="avatar">
        <img width="100%" src="https://blush.design/api/download?shareUri=lWYd9h26cKmtH3pi&c=Hair_0%7E9b5120_Skin_0%7Ef6cbc3&w=500&h=500&fm=png" alt="" srcset="">
        <span>{{kolInfo.Username}}</span>
    </li>
</template>

<script>

export default {
    name: 'kolAvatar',
    props:[
        'kolInfo',
    ],
}
</script>