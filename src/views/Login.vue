<template>
    <div class="dialogBg">
        <ul class="dialogBlock">

            <li class="signUpArea">
                <img width="15%" class="logo" src="../assets/img/logo.svg">
                <h1 class="brandTitle">KOLperation</h1>
                <img width="75%" class="imgBlock" src="https://blush.design/api/download?shareUri=Zy9CKrwYXfpVnecQ&c=Hair_0%7E878787-0.2%7E878787-0.3%7E0f0f0f_Skin_0%7E7d4439-0.2%7Ef6cbc3-0.3%7Ec26e5e&bg=ffffff&w=350&h=350&fm=png">
                <span class="signUpTitle">還沒有帳號嗎？ Sign Up</span>
                <span class="signUpDescrip">立即註冊開始使用</span>
                
                <ul class="btnBlock">

                    <router-link to="/signup/kol">
                    <li class="btnItem kolBtn">
                        <fa-icon icon="photo-video" class="icon" />
                        <span>創作者註冊</span>
                    </li>
                    </router-link>
                    
                    <router-link to="/signup/firm">
                    <li class="btnItem businesBtn">
                        <fa-icon icon="briefcase" class="icon" />
                        <span>業者註冊</span>
                    </li>
                    </router-link>

                </ul>
            </li>

            <li class="loginArea">
                <router-link to="/">
                    <fa-icon icon="times" class="crossIcon" />
                </router-link>
                <h2>登入 Sign In</h2>
                <ul class="inputBlock">
                    <li class="inputItems">
                        <fa-icon icon="user" class="icon" />
                        <input 
                          type="text" 
                          placeholder="請輸入帳號" 
                          v-model="userAccount"
                        >
                    </li>
                    <li class="inputItems">
                        <fa-icon icon="lock" class="icon" />
                        <input 
                          type="password" 
                          placeholder="請輸入密碼" 
                          v-model="userCode"
                          v-on:keyup.enter="getUsersInfo()"
                        >
                    </li>
                </ul>
                <router-link to="/loader">
                <span 
                  class="loginBtn"
                  @click="getUsersInfo()"
                >
                登入 Sign In</span>
                </router-link>

                <span class="loginDescrip">透過Google或Facebook登入</span>
                <ul class="btnBlock">
                    <a href="#">
                    <li class="btnItems googleBtn">
                        <fa-icon icon="users" class="icon" />
                        <span>Google登入</span>
                    </li>
                    </a>

                    <a href="#">
                    <li class="btnItems fbBtn">
                        <fa-icon icon="users" class="icon" />
                        <span>Facebook登入</span>
                    </li>
                    </a>
                </ul>

            </li>

        </ul>
    </div>
</template>

<script>

export default {
    name: 'login',
    data(){
        return{
            'userAccount': null,
            'userCode': null,
        }
    },
    methods:{
        getUsersInfo(){
            console.log(this.userAccount);
            console.log(this.userCode);

            const userName = this.userAccount;
            const userCode = this.userCode;
            const loginAPI = 'http://kolperation.rocket-coding.com/api/Login';

            this.$http
              .post(loginAPI,{
                  "Account":userName,
                  "Password":userCode
              })
              .then( res => {
                  console.log('LOGIN sucessed');
                  console.log(res);
              })
              .catch( err => {
                  console.error(err);
              })

        }
    }

}
</script>

<style scoped>

</style>