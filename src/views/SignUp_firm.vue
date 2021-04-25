<template>
    <div class="signUpKOL signUpFirm">
        <ul class="signUpBlock firmStyle">
            <h2>業者註冊 Firm Sign Up</h2>
            <li class="signUpItem">
                <fa-icon icon="user" class="icon" />
                <input 
                  type="text" 
                  placeholder="請輸入帳號"
                  v-model="userAccount"
                >
            </li>
            <li class="signUpItem">
                <fa-icon icon="briefcase" class="icon" />
                <input 
                  type="text" 
                  placeholder="請輸入公司名稱"
                  v-model="firmName"
                >
            </li>
            <li class="signUpItem">
                <fa-icon icon="lock" class="icon" />
                <input 
                  type="password" 
                  placeholder="請輸入密碼 ( 6 ~ 12個字元 )"
                  v-model="psw"
                >
            </li>
            <li class="signUpItem">
                <fa-icon icon="lock" class="icon" />
                <input 
                  type="password" 
                  placeholder="密碼再次確認"
                  v-model="checkPsw"
                >
            </li>
            <li class="signUpItem">
                <fa-icon icon="envelope" class="icon" />
                <input 
                  type="text" 
                  placeholder="請輸入電子信箱"
                  v-model="email"
                >
            </li>
            <li class="signUpItem">
                <fa-icon icon="phone" class="icon" />
                <input 
                  type="text" 
                  placeholder="請輸入手機號碼"
                  v-model="phoneNum"
                >
            </li>
            <li class="signUpItem">
                <fa-icon icon="cash-register" class="icon" />
                <input 
                  type="text" 
                  placeholder="請輸入公司統一編號"
                  v-model="firmId"
                >
            </li>

            <span class="socialDescript">使用中的平台</span>

            <ul class="socialBlock">
                <li 
                  class="socialItem"
                  :class="fbBool === true ? 'selectItem' : '' "
                  @click="selectPlat('fb')"
                >
                    <img width="70%" src="../assets/img/facebook.svg" alt="">
                    <span>Facebook</span>
                </li>

                <li 
                  class="socialItem"
                  :class="igBool === true ? 'selectItem' : '' "
                  @click="selectPlat('ig')"
                >
                    <img width="70%" src="../assets/img/instagram.svg" alt="">
                    <span>instagram</span>
                </li>

                <li 
                  class="socialItem"
                  :class="ytBool === true ? 'selectItem' : '' "
                  @click="selectPlat('yt')"
                >
                    <img width="70%" src="../assets/img/youtube.svg" alt="">
                    <span>Youtuber</span>
                </li>
            </ul>

            <router-link :to="{ name: 'SignUp_loader', query: { loadPath: 'login'}}">
                <span 
                  class="signUpBtn"
                  @click="signUpInfo()"
                >註冊 Sign Up</span>
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

<script>
export default {
    name: 'signUp_firm',
    data(){
        return{
            'userAccount': null,
            'firmName'   : null,
            'psw'        : null,
            'checkPsw'   : null,
            'email'      : null,
            'phoneNum'   : null,
            'firmId'     : null,
            'fbBool'     : false,
            'igBool'     : false,
            'ytBool'     : false,
            'path'       : 'login'
        }
    },
    methods:{
        signUpInfo(){
            console.log(this.userAccount);
            console.log(this.firmName);
            console.log(this.psw);
            console.log(this.email);
            console.log(this.phoneNum);
            console.log(this);

            const signUpAPI = 'http://kolperation.rocket-coding.com/api/CompanyRegister';

            let signUpItem = {
                "AccountId": {},
                "Password": {},
                "TaxIdNumber": {},
                "Company": {},
                "Email": {},
                "Cellphone": {},
                // "ChannelTags": ,  
            }

            signUpItem.AccountId    = this.userAccount;
            signUpItem.Password     = this.psw;
            signUpItem.TaxIdNumber  = this.firmId;
            signUpItem.Company      = this.firmName;
            signUpItem.Email        = this.email;
            signUpItem.Cellphone    = this.phoneNum;

            this.$http
              .post(signUpAPI,signUpItem)
              .then( res => {
                  console.log('SIGN UP SUCESSED');
                  console.log(res);
              })
              .catch( err => {
                  console.error(err);
              })

        },
        selectPlat(plat){
            if( plat === 'fb' ){
                this.fbBool = !this.fbBool;
            }
            else if ( plat === 'ig' ){
                this.igBool = !this.igBool;
            }
            else if ( plat === 'yt' ){
                this.ytBool = !this.ytBool;
            }

        }
    }
}
</script>