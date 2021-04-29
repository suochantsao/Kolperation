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
                <img width="70%" :src="infoData.KOLavatar" alt="" srcset="">
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
                  :class="fbBool === true ? 'usingMediaItem' : '' "
                >
                    <fa-icon :icon="['fab', 'facebook-square']" class="icon" />
                    <input 
                    type="text" 
                    placeholder="Facebook 帳號"
                    >
                    <fa-icon icon="users" class="icon urlBlock" />
                    <input 
                    type="text" 
                    placeholder="Facebook 粉絲人數"
                    >
                </li>
                <li 
                  class="infoItem socialMediaItem"
                  :class="igBool === true ? 'usingMediaItem' : '' "
                >
                    <fa-icon :icon="['fab', 'instagram']" class="icon" />
                    <input 
                    type="text" 
                    placeholder="Instagram 帳號"
                    >
                    <fa-icon icon="users" class="icon urlBlock" />
                    <input 
                    type="text" 
                    placeholder="Instagram 粉絲人數"
                    >
                </li>
                <li 
                  class="infoItem socialMediaItem"
                  :class="ytBool === true ? 'usingMediaItem' : '' "
                >
                    <fa-icon :icon="['fab', 'youtube']" class="icon" />
                    <input 
                    type="text" 
                    placeholder="YouTube 帳號"
                    >
                    <fa-icon icon="users" class="icon urlBlock" />
                    <input 
                    type="text" 
                    placeholder="YouTube 粉絲人數"
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

                        const delUserAPI = `http://kolperation.rocket-coding.com/api/DeleteKOLAccount/${this.kolUserId}`

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
                if (result.isConfirmed) {
                    console.log(result.value);
                    
                    let newCode = {
                        "UserId": this.kolUserId,
                        // "OldPassword": "lol",
                        "NewPassword": result.value,
                        // "NewPasswordConfirmation": "lol"
                    }
                    console.log(newCode);
                    
                    const setCodeAPI = `http://kolperation.rocket-coding.com/api/PutKOLPass/${this.kolUserId}`
            
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
            }})
        },
        confirmChange(picName){
            
            const changeAPI = `http://kolperation.rocket-coding.com/api/PutKOL/${this.kolUserId}`

            let infoItem = {
                "KolId": this.kolUserId,
                "Email": this.infoData.Email,
                "Phone": this.infoData.Phone,
                "Username": this.infoData.Username,
                "KOLProfile": this.infoData.KOLProfile,
                "Avatar": picName,
                "SectorTags": "01,05",
                "ChannelDetails": [
                    {
                        "ChannelId": 1,
                        "Url": null,
                        "FansNumber":200000
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

                    const uploadAPI = `http://kolperation.rocket-coding.com/api/UploadFile`;

                    this.$http
                    .post(uploadAPI,formData,newConfig)
                    .then( res => {
                        console.log('照片上傳成功');
                        console.log(res);
                        this.confirmChange(res.data)
                        // this.successAlert('個人頭像更新成功')
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
            'infoData' : null,
            'kolUserId': null,
            'userToken': null,
            'config'   : null,
            'dateStr'  : null,
            'fbBool'   : false,
            'igBool'   : false,
            'ytBool'   : false,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };

        const userAPI  = 'http://kolperation.rocket-coding.com/api/GetKOLforEditing'

        this.$http
          .get(userAPI,this.config)
          .then( res => {
            console.log('USER INFO GET SUCCEED');
            this.infoData  = res.data[0];
            this.kolUserId = this.infoData.KolId;
            this.dateStr   = this.infoData.JoinedDate.slice(0,10).replace(/-/g,".");
            this.fbBool    = this.infoData.Channels[0].booling;
            this.igBool    = this.infoData.Channels[1].booling;
            this.ytBool    = this.infoData.Channels[2].booling;

            console.log(this.infoData);
          })
          .catch( err => {
            console.error(err);
          });
    }
}
</script>