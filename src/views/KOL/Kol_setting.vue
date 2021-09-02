<template>
    <div class="kolMesBlock kolSetBlock">
        <ul class="setTitle">
            <h1>帳號設定</h1>
            <li 
              class="specBtn"
              @click="confirmChange()"
            >
                <fa-icon icon="check" class="icon" />
                <span>確認修改</span>
            </li>
        </ul>
        <div class="mesArea alertArea userInfoArea">
            <ul class="picBlock">
                <img width="70%" :src="userAvatar" alt="" srcset="">
                <li>
                    <span 
                      class="uploadBtn"
                      @click="uploadPic"
                    >上傳圖片</span>
                    <span class="removeBtn">移除圖片</span>
                </li>
                <span class="createDate">加入日期：{{dateStr}}</span>

            </ul>
            <ul class="inputBlock">
                <li class="infoItem cantChange">
                    <fa-icon icon="user" class="icon" />
                    <input 
                    type="text" 
                    placeholder="帳號"
                    v-model="infoData.AccountId"
                    >
                </li>
                <li class="infoItem">
                    <fa-icon icon="id-card-alt" class="icon" />
                    <input 
                    type="text" 
                    placeholder="請輸入新的使用者名稱"
                    v-model="infoData.Username"
                    >
                </li>
                <li class="infoItem">
                    <fa-icon icon="envelope" class="icon" />
                    <input 
                    type="text" 
                    placeholder="電子信箱"
                    v-model="infoData.Email"
                    >
                </li>
                <li class="infoItem">
                    <fa-icon icon="phone" class="icon" />
                    <input 
                    type="text" 
                    placeholder="手機號碼"
                    v-model="infoData.Phone"
                    >
                </li>
                <li 
                  class="infoItem socialMediaItem"
                >
                    <fa-icon :icon="['fab', 'facebook-square']" class="icon" />
                    <input 
                    type="text" 
                    placeholder="Facebook 帳號"
                    v-model="fbAccount"
                    >
                    <fa-icon icon="users" class="icon urlBlock" />
                    <input 
                    type="text" 
                    placeholder="Facebook 粉絲人數"
                    v-model="fbFansNum"
                    >
                </li>
                <li 
                  class="infoItem socialMediaItem"
                >
                    <fa-icon :icon="['fab', 'instagram']" class="icon" />
                    <input 
                    type="text" 
                    placeholder="Instagram 帳號"
                    v-model="igAccount"
                    >
                    <fa-icon icon="users" class="icon urlBlock" />
                    <input 
                    type="text" 
                    placeholder="Instagram 粉絲人數"
                    v-model="igFansNum"
                    >
                </li>
                <li 
                  class="infoItem socialMediaItem"
                >
                    <fa-icon :icon="['fab', 'youtube']" class="icon" />
                    <input 
                    type="text" 
                    placeholder="YouTube 帳號"
                    v-model="ytAccount"
                    >
                    <fa-icon icon="users" class="icon urlBlock" />
                    <input 
                    type="text" 
                    placeholder="YouTube 粉絲人數"
                    v-model="ytFansNum"
                    >
                </li>
                <li class="infoItem">
                    <fa-icon icon="user-plus" class="icon" />
                    <input 
                    type="text" 
                    placeholder="個人簡介"
                    v-model="infoData.KOLProfile"
                    >
                </li>

                <ul class="btnBlock">
                    <li 
                      class="btn"
                      @click="resetCode"
                    >
                        <fa-icon icon="user-lock" class="icon" />
                        <span>修改密碼</span>
                    </li> 
                    <li 
                      class="btn delBtn"
                      @click="delAccount"
                    >
                        <fa-icon icon="exclamation-circle" class="icon" />
                        <span>刪除帳號</span>
                    </li> 
                </ul>
                
            </ul>

        </div>
        
    </div>
</template>

<script>
export default {
    name:'kolSetting',
    inject:['reload'],
    methods:{
        delAccount(){
            console.log('del Btn');

            this.$swal({
                title: '確認要刪除此帳號嗎?',
                showDenyButton: true,
                icon: 'warning',
                confirmButtonText: `取消`,
                denyButtonText: `確認刪除`,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log('取消刪除');
                    } 
                    else if (result.isDenied) {
                        this.successAlert('帳號刪除成功');
                        localStorage.clear();
                        this.$router.push({ path: `/${this.pathStr}`})
                        setTimeout(()=>{
                            this.pathStr = this.$route.query.loadPath
                            this.$router.push({ path: `/`})
                        }
                        ,1500);

                        const delUserAPI = `https://kolperation.rocket-coding.com/api/DeleteKOLAccount/${this.kolUserId}`

                        this.$http
                        .delete(delUserAPI,this.config)
                        .then( res => {
                            console.log(res);
                            console.log("刪除帳號成功");
                        })
                        .catch( err => {
                            console.error(err);
                        });

                    }
            });

        },
        resetCode(){
            this.$swal({
                title: '請輸入您的新密碼',
                input: 'password',
                inputLabel: ' ',
                inputPlaceholder: '新密碼輸入',
                inputAttributes: {
                    maxlength: 50,
                    autocapitalize: 'off',
                    autocorrect: 'off'
                }
            })
            .then((result) => {
                const codeStr = result.value.trim();
                if ( codeStr === '' ){
                    this.$swal({
                        icon: 'question',
                        title: '修改失敗',
                        text: '密碼欄位不能為空',
                    })
                }
                else if ( result.isConfirmed ) {
                    console.log(result.value);
                    
                    let newCode = {
                        "UserId": this.kolUserId,
                        "NewPassword": result.value,
                    }
                    console.log(newCode);
                    
                    const setCodeAPI = `https://kolperation.rocket-coding.com/api/PutKOLPass/${this.kolUserId}`
            
                    this.$http
                      .put(setCodeAPI,newCode,this.config)
                      .then( res => {
                          console.log(res);
                          console.log("修改密碼成功");
                          this.successAlert('修改密碼成功')
                      })
                      .catch( err => {
                          console.error(err);
                      })
                }
            })
        },
        confirmChange(){
            
            const changeAPI = `https://kolperation.rocket-coding.com/api/PutKOL/${this.kolUserId}`

            let infoItem = {
                "KolId": this.kolUserId,
                "Email": this.infoData.Email,
                "Phone": this.infoData.Phone,
                "Username": this.infoData.Username,
                "KOLProfile": this.infoData.KOLProfile,
                "Avatar": this.userAvatar,
                "ChannelDetails": [
                    {
                        "ChannelId": 1,
                        "Url": this.fbAccount,
                        "FansNumber":this.fbFansNum
                    },
                    {
                        "ChannelId": 2,
                        "Url": this.igAccount,
                        "FansNumber": this.igFansNum
                    },
                    {
                        "ChannelId": 3,
                        "Url": this.ytAccount,
                        "FansNumber": this.ytFansNum
                    }
                ]
            }
            console.log(infoItem);

            this.$http
              .put(changeAPI,infoItem,this.config)
              .then( res => {
                  console.log(res);
                  console.log("修改成功");
                  this.reload();
                  this.successAlert('會員資料修改成功')
                    
              })
              .catch( err => {
                  console.error(err);
              })
        },
        uploadPic(){
            console.log('上傳圖片測試');

            this.$swal({
                title: '請選擇您要上傳的圖片',
                input: 'file',
                inputAttributes: {
                    'accept': 'image/*',
                    'aria-label': 'Upload your profile picture'
                }
            })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log(result.value);

                    const profileName = result.value.name;
                    const fileObj     = result.value;
                    const formData    = new FormData();

                    const newConfig   = { 
                        headers: { 
                            Authorization: `Bearer ${this.userToken}`,
                            'Content-Type': `multipart/from-data`
                        } 
                    }
                    formData.append('file',fileObj,profileName);
                    console.log(formData.get('file'));

                    const uploadAPI = `https://kolperation.rocket-coding.com/api/UploadFile`;

                    this.$http
                    .post(uploadAPI,formData,newConfig)
                    .then( res => {
                        console.log('照片上傳成功');
                        console.log(res.data);
                        this.userAvatar = res.data;
                    })
                    .catch( err => {
                        console.error(err);
                    });
                }
            })
        },
        successAlert(str){
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: str,
                showConfirmButton: false,
                timer: 1800
            })
        },
    },
    data(){
        return{
            'infoData'   : null,
            'kolUserId'  : null,
            'userToken'  : null,
            'config'     : null,
            'dateStr'    : null,
            'userAvatar' : null,
            'codeCheck'  : null,
            'fbAccount'  : null,
            'igAccount'  : null,
            'ytAccount'  : null,
            'fbFansNum'  : null,
            'igFansNum'  : null,
            'ytFansNum'  : null,
            'fbBool'     : false,
            'igBool'     : false,
            'ytBool'     : false,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };

        const userAPI  = 'https://kolperation.rocket-coding.com/api/GetKOLforEditing'

        this.$http
          .get(userAPI,this.config)
          .then( res => {
            console.log('USER INFO GET SUCCEED');
            this.infoData   = res.data[0];
            this.kolUserId  = this.infoData.KolId;
            this.userAvatar = this.infoData.KOLavatar;
            this.dateStr    = this.infoData.JoinedDate.slice(0,10).replace(/-/g,".");
            this.fbBool     = this.infoData.Channels[0].booling;
            this.igBool     = this.infoData.Channels[1].booling;
            this.ytBool     = this.infoData.Channels[2].booling;
            this.fbAccount  = this.infoData.Channels[0].Url;
            this.igAccount  = this.infoData.Channels[1].Url;
            this.ytAccount  = this.infoData.Channels[2].Url;
            this.fbFansNum  = this.infoData.Channels[0].FansNumber;
            this.igFansNum  = this.infoData.Channels[1].FansNumber;
            this.ytFansNum  = this.infoData.Channels[2].FansNumber;
            this.codeCheck  = this.infoData.Check;

            if ( this.codeCheck === 1 ){
                this.resetCode()
            }

            console.log(this.infoData);

          })
          .catch( err => {
            console.error(err);
          });
        
    }
}
</script>