<template>
    <div class="kolMesBlock kolSetBlock">
        <ul class="setTitle">
            <h1>帳號設定</h1>
            <li 
              class="specBtn"
              @click="confirmChange"
            >
                <fa-icon icon="check" class="icon" />
                <span>確認修改</span>
            </li>
        </ul>
        <div class="mesArea alertArea userInfoArea">
            <ul class="picBlock">
                <img width="90%" src="https://blush.design/api/download?shareUri=lWYd9h26cKmtH3pi&c=Hair_0%7E9b5120_Skin_0%7Ef6cbc3&w=500&h=500&fm=png" alt="" srcset="">
                <li>
                    <span class="uploadBtn">上傳圖片</span>
                    <span class="removeBtn">移除圖片</span>
                </li>
                <span class="createDate">加入日期：2021.04.21</span>

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
                <li class="infoItem socialMediaItem">
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
                <li class="infoItem socialMediaItem">
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
                <li class="infoItem socialMediaItem">
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
    methods:{

        delAccount(){
            console.log('del Btn');

            this.$swal({
                title: '請問確認要刪除此帳號嗎?',
                showDenyButton: true,
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
                        this.delApi();

                    }
            });

        },
        resetCode(){
            console.log('Reset Code');
        },
        delApi(){
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

        },
        successAlert(str){
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: str,
                showConfirmButton: false,
                timer: 1500
            })
        },
        confirmChange(){
            
            const changeAPI = `http://kolperation.rocket-coding.com/api/PutKOL/${this.kolUserId}`

            let infoItem = {
                "KolId": this.kolUserId,
                "Email": this.infoData.Email,
                "Phone": this.infoData.Phone,
                "Username": this.infoData.Username,
                "KOLProfile": this.infoData.KOLProfile,
                "Avatar": null,
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
                  this.successAlert('會員資料修改成功')

              })
              .catch( err => {
                  console.error(err);
              })
        }
    },
    data(){
        return{
            'infoData' : null,
            'kolUserId': null,
            'userToken': null,
            'config'   : null,
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
            console.log(this.infoData);
            console.log(this.kolUserId);
          })
          .catch( err => {
            console.error(err);
          });
    }
}
</script>