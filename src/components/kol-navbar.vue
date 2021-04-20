<template>
    <ul class="navbar scrollStyle">
        <li>
            <fa-icon icon="bars" class="icon hamIcon" />
        </li>
        <li class="avatar">
            <img width="90%" src="https://blush.design/api/download?shareUri=lWYd9h26cKmtH3pi&c=Hair_0%7E9b5120_Skin_0%7Ef6cbc3&w=500&h=500&fm=png" alt="" srcset="">
            <span>{{name}}</span>
        </li>

        <ul class="countBlock">
            <li class="countItem">
                <span class="descript">正在洽談件數</span>
                <span class="count">{{caseCount.goingCases}}</span>
            </li>
            <li class="countItem successItem">
                <span class="descript">成功洽談件數</span>
                <span class="count">{{caseCount.successCases}}</span>
            </li>
        </ul>

        <router-link to="/kolplat/savefirm">
        <li class="navBtn">
            <fa-icon icon="briefcase" class="icon" />
            <span>儲存公司</span>
        </li>
        </router-link>
        <router-link to="/kolplat/savecase">
        <li class="navBtn">
            <fa-icon icon="heart" class="icon" />
            <span>儲存案件</span>
        </li>
        </router-link>
        <router-link to="/kolplat/passcase">
        <li class="navBtn">
            <fa-icon icon="calendar-check" class="icon" />
            <span>過往案件</span>
        </li>
        </router-link>
        <router-link to="/kolplat/setting">
        <li class="navBtn">
            <fa-icon icon="cog" class="icon" />
            <span>帳號設定</span>
        </li>
        </router-link>
        <router-link to="/" >
        <li class="navBtn logoutBtn">
            <fa-icon icon="sign-out-alt" class="icon" />
            <span>登出平台</span>
        </li>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'kolNavbar',
    props:[
        'caseCount',
        'name'
    ],

}
</script>