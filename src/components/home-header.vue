<template>
    <header>
        <h1>
            <img class="logo" src="../assets/img/logo.svg">
            <router-link class="txtBlue" to="/">
                <span class="brandName">KOLperation</span>
            </router-link>
        </h1>
        <li>
            <router-link class="linkStyle" to= "/trial">平台試用</router-link>
        </li>
        <li class="specBtn">註冊/登入</li>
    </header>
</template>

<script>
export default {
    name: 'homeHeader',
    
}
</script>

    