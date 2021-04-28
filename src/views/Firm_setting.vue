<template>
    <div class="kolMesBlock kolSetBlock firmSetBlock">
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
                <img width="70%" :src="infoData.CompanyLogo" alt="" srcset="">
                <li>
                    <span 
                      class="uploadBtn"
                      @click="uploadPic"
                    >上傳圖片</span>
                    <span class="removeBtn">移除圖片</span>
                </li>
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
                    v-model="infoData.Company"
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

                <li class="infoItem">
                    <fa-icon icon="user-plus" class="icon" />
                    <input 
                    type="text" 
                    placeholder="接洽人"
                    v-model="infoData.PersonInCharge"
                    >
                </li>
                <li class="infoItem">
                    <fa-icon icon="cash-register" class="icon" />
                    <input 
                        type="text" 
                        placeholder="公司統一編號"
                        v-model="infoData.TaxIdNumber"
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
                    placeholder="Facebook 帳號"
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
                    placeholder="Instagram 帳號"
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
                    placeholder="YouTube 帳號"
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
                    
                </ul>
            </ul>

        </div>
        
    </div>
</template>

<script>
export default {
    inject:['reload'],
    name:'kolSetting',
    methods:{
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
                        "UserId": this.firmUserId,
                        "NewPassword": result.value,
                        // "OldPassword": "lol",
                        // "NewPasswordConfirmation": "lol"
                    }
                    console.log(newCode);
                    
                    const setCodeAPI = `http://kolperation.rocket-coding.com/api/PutCompanyPass/${this.firmUserId}`
            
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
        confirmChange(){
            
            const changeAPI = `http://kolperation.rocket-coding.com/api/PutCompany/${this.firmUserId}`

            let infoItem = {
                
                "ComId":this.firmUserId,
                "Company": this.infoData.Company,
                "CompanyProfile": null,
                "Email": this.infoData.Email,
                "Phone": this.infoData.Phone,
                "PersonInCharge": this.infoData.PersonInCharge,
                // "ChannelTags":"03,05",
                // "SectorTags": "06,07,08",
                // "Website":"xxxx"
                // "CompanyLogo": "fff.png",
                // "Address": "",
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

                    const uploadAPI = `http://kolperation.rocket-coding.com/api/UploadFile`;

                    this.$http
                    .post(uploadAPI,result.value,this.config)
                    .then( res => {
                        console.log('照片上傳成功');
                        console.log(res);
                        this.successAlert('個人頭像更新成功')
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
            'firmUserId': null,
            'userToken': null,
            'config'   : null,
            'fbBool'   : false,
            'igBool'   : false,
            'ytBool'   : false,
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };

        const firmAPI  = 'http://kolperation.rocket-coding.com/api/GetCompanyforEditing'

        this.$http
          .get(firmAPI,this.config)
          .then( res => {
            console.log('USER INFO GET SUCCEED');
            console.log(res);
            this.infoData   = res.data;
            this.firmUserId = this.infoData.ComId;
            this.fbBool     = this.infoData.Channels[0].booling;
            this.igBool     = this.infoData.Channels[1].booling;
            this.ytBool     = this.infoData.Channels[2].booling;

            console.log(this.firmUserId);
          })
          .catch( err => {
            console.error(err);
          });
    }
}
</script>