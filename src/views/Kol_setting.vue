<template>
    <div class="kolMesBlock kolSetBlock">
        <ul class="setTitle">
            <h1>帳號設定</h1>
            <li class="specBtn">
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
                <li class="infoItem">
                    <fa-icon icon="user" class="icon" />
                    <input 
                    type="text" 
                    placeholder="帳號"
                    >
                </li>
                <li class="infoItem">
                    <fa-icon icon="id-card-alt" class="icon" />
                    <input 
                    type="text" 
                    placeholder="請輸入新的使用者名稱"
                    >
                </li>
                <li class="infoItem">
                <fa-icon icon="envelope" class="icon" />
                <input 
                  type="text" 
                  placeholder="電子信箱"
                >
                </li>
                <li class="infoItem">
                    <fa-icon icon="phone" class="icon" />
                    <input 
                    type="text" 
                    placeholder="手機號碼"
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
                    >
                </li>

                <ul class="btnBlock">
                    <li class="btn">
                        <fa-icon icon="user-lock" class="icon" />
                        <span>修改密碼</span>
                    </li> 
                    <li class="btn delBtn">
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
    
}
</script>