<template>
    <div class="signUpKOL">
        <ul class="signUpBlock">
            <h2>創作者註冊 KOL Sign Up</h2>
            <li class="signUpItem">
                <fa-icon icon="user" class="icon" />
                <input 
                  type="text" 
                  placeholder="請輸入帳號"
                  v-model="userAccount"
                >
            </li>
            <li class="signUpItem">
                <fa-icon icon="id-card-alt" class="icon" />
                <input 
                  type="text" 
                  placeholder="請輸入使用者名稱"
                  v-model="userName"
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
                  placeholder="請輸入電子信箱（真實信箱）"
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

            <span class="wrnDescript dpNone">請填入紅框內的資料後再點擊註冊</span>
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
                <fa-icon icon="times" class="crossIcon" />
            </router-link>
            
            <li class="logoContent">
                <img width="15%" class="logo" src="../assets/img/logo.svg">
                <h1 class="brandTitle">KOLperation</h1>
                <img class="imgBlock" src="https://blush.design/api/download?shareUri=n15Zhq0klfmnY4kP&c=Hair_0%7E711515-0.3%7E0f0f0f-0.5%7E0f0f0f-0.6%7Effc943_Skin_0%7Ef6cbc3-0.3%7Ef6cbc3-0.5%7Eecafa3-0.6%7Eecafa3&w=800&h=800&fm=png">
                <span>讓業主與KOL輕鬆配對的媒合平台</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'signUp_kol',
    data(){
        return{
            'userAccount': null,
            'userName'   : null,
            'psw'        : null,
            'checkPsw'   : null,
            'email'      : null,
            'phoneNum'   : null,
            'usingPlat'  : null,
            'token'      : null,
            'fbBool'     : false,
            'igBool'     : false,
            'ytBool'     : false,
            'path'       : 'login',
        }
    },
    methods:{
        signUpInfo(){
            console.log(this.userAccount);
            console.log(this.userName);
            console.log(this.psw);
            console.log(this.email);
            console.log(this.phoneNum);

            const signUpAPI = 'https://kolperation.rocket-coding.com/api/KOLRegister';

            let signUpItem = {
                "AccountId": {},
                "Username": {},
                "Password": {},
                "Email": {},
                "Phone": {}, 
            }

            signUpItem.AccountId = this.userAccount;
            signUpItem.Username  = this.userName;
            signUpItem.Password  = this.psw;
            signUpItem.Email     = this.email;
            signUpItem.Phone     = this.phoneNum;

            if( this.fbBool === true ){
                const channelObj = [];
                const obj= {
                    "ChannelId":1
                };
                channelObj.push(obj);
                signUpItem.ChannelDetails = channelObj;
            }
            if( this.igBool === true ){
                const channelObj = [];
                const obj= {
                    "ChannelId":2
                };
                channelObj.push(obj);
                signUpItem.ChannelDetails = channelObj;
            }
            if( this.ytBool === true ){
                const channelObj = [];
                const obj= {
                    "ChannelId":3
                };
                channelObj.push(obj);
                signUpItem.ChannelDetails = channelObj;
            }

            console.log(signUpItem);

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