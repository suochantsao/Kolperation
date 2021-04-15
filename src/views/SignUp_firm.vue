<template>
    <div class="signUpKOL signUpFirm">
        <ul class="signUpBlock firmStyle">
            <h2>業者註冊 Firm Sign Up</h2>
            <li class="signUpItem">
                <fa-icon icon="user" class="icon" />
                <input type="text" placeholder="請輸入帳號">
            </li>
            <li class="signUpItem">
                <fa-icon icon="briefcase" class="icon" />
                <input type="text" placeholder="請輸入公司名稱">
            </li>
            <li class="signUpItem">
                <fa-icon icon="lock" class="icon" />
                <input type="password" placeholder="請輸入密碼 ( 6 ~ 12個字元 )">
            </li>
            <li class="signUpItem">
                <fa-icon icon="lock" class="icon" />
                <input type="password" placeholder="密碼再次確認">
            </li>
            <li class="signUpItem">
                <fa-icon icon="envelope" class="icon" />
                <input type="text" placeholder="請輸入電子信箱">
            </li>
            <li class="signUpItem">
                <fa-icon icon="phone" class="icon" />
                <input type="text" placeholder="請輸入手機號碼">
            </li>
            <li class="signUpItem">
                <fa-icon icon="cash-register" class="icon" />
                <input type="text" placeholder="請輸入公司統一編號">
            </li>

            <span class="socialDescript">使用中的平台</span>

            <ul class="socialBlock">
                <li class="socialItem selectItem">
                    <img width="70%" src="../assets/img/facebook.svg" alt="">
                    <span>Facebook</span>
                </li>
                <li class="socialItem">
                    <img width="70%" src="../assets/img/instagram.svg" alt="">
                    <span>instagram</span>
                </li>
                <li class="socialItem">
                    <img width="70%" src="../assets/img/youtube.svg" alt="">
                    <span>Youtuber</span>
                </li>
            </ul>

            <router-link :to="{ name: 'SignUp_loader', query: { loadPath: 'login'}}">
                <span class="signUpBtn">註冊 Sign Up</span>
            </router-link>
            
        </ul>
        
        <ul class="logoBlock">
            <router-link to="/login">
                <fa-icon icon="times" class="crossIcon firmCross" />
            </router-link>
            
            <li class="logoContent">
                <img width="15%" class="logo" src="../assets/img/logo.svg">
                <h1 class="brandTitle">KOLperation</h1>
                <img class="imgBlock" src="https://blush.design/api/download?shareUri=yqN6UawGTyj-4O4m&c=Hair_0%7E9b5120-0.3%7Effc943_Skin_0%7E7d4439-0.3%7Ef6cbc3&w=800&h=800&fm=png">
                <span>讓業主與KOL輕鬆配對的媒合平台</span>
            </li>
        </ul>
    </div>
</template>