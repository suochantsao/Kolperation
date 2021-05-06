<template>
    <ul class="navbar scrollStyle">
        <li>
            <fa-icon icon="bars" class="icon hamIcon" />
        </li>
        <li class="avatar">
            <img width="90%" :src="user.CompanyLogo" alt="" srcset="">
            <span>{{user.Company}}</span>
        </li>

        <ul class="countBlock">
            <li class="countItem">
                <span class="descript">執行中案件數</span>
                <span class="count">{{caseCount.goingCases}}</span>
            </li>
            <li class="countItem successItem">
                <span class="descript">已結案案件數</span>
                <span class="count">{{caseCount.successCases}}</span>
            </li>
        </ul>

        <router-link to="/firmplat/savekol">
        <li class="navBtn">
            <fa-icon icon="heart" class="icon" />
            <span>儲存KOL</span>
        </li>
        </router-link>
        <router-link to="/firmplat/passcase">
        <li class="navBtn">
            <fa-icon icon="calendar-check" class="icon" />
            <span>過往案件</span>
        </li>
        </router-link>
        <router-link to="/firmplat/setting">
        <li class="navBtn">
            <fa-icon icon="cog" class="icon" />
            <span>帳號設定</span>
        </li>
        </router-link>
        <router-link to="/" >
        <li 
          class="navBtn logoutBtn"
          @click="logOut"
        >
            <fa-icon icon="sign-out-alt" class="icon" />
            <span>登出平台</span>
        </li>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'firmNavbar',
    props:[
        'caseCount',
        'user'
    ],
    methods:{
        logOut(){
            localStorage.clear()
        }

    }
}
</script>