<template>
    <div class="kolMesBlock kolSetBlock firmSetBlock firmAddBlock">
        <ul class="setTitle">
            <h1>新增案件</h1>
            <li 
              class="specBtn"
              @click="addCase"
            >
                <fa-icon icon="check" class="icon" />
                <span>確認新增</span>
            </li>
        </ul>
        <div class="mesArea alertArea caseInfo scrollWhite">
            <ul class="picBlock">
                <img width="70%" :src="picName" alt="">
                <li class="uploadPicBtn">
                    <span 
                      class="uploadBtn"
                      @click="uploadPic"
                    >上傳圖片</span>
                    <span class="removeBtn">移除圖片</span>
                </li>

            </ul>

            <ul class="inputBlock">
                <ul class="inputArea">

                    <li class="infoItem titleInput">
                        <fa-icon icon="user" class="icon" />
                        <input 
                            type="text" 
                            class="longInput"
                            placeholder="案件名稱"
                            v-model="caseName"
                        >
                    </li>
                    
                    <ul class="twoInput">
                        <li class="infoItem">
                            <fa-icon icon="user" class="icon" />
                            <input 
                                type="text" 
                                placeholder="此案件聯絡人"
                                v-model="contactor"
                            >
                        </li>          
                        <li class="infoItem padSet">
                            <fa-icon icon="user" class="icon" />
                            <input 
                                type="text" 
                                placeholder="需求人數"
                                v-model="requireNum"
                            >
                        </li> 
                    </ul>
                    <ul class="twoInput">
                        <li class="infoItem">
                            <fa-icon icon="user" class="icon" />
                            <input 
                                type="text" 
                                placeholder="合作預算金額"
                                v-model="budget"
                            >
                        </li>          
                        <li class="infoItem padSet">
                            <fa-icon icon="user" class="icon" />
                            <input 
                                type="text" 
                                placeholder="截止日: 2021.05.05"
                                v-model="dateStr"
                            >
                        </li> 
                    </ul>
                    
                    <li class="infoItem contentInput">
                        <input 
                            type="text" 
                            class="longInput"
                            placeholder="合作內容"
                            v-model="caseContent"
                        >
                    </li>
                    
                </ul>

                <ul class="selectBlock">
                    <li class="multieBlock">
                        <Multiselect
                            v-model="fansNum.value"
                            v-bind="fansNum"
                            mode="tags"
                            placeholder="請選擇粉絲人數"
                            :searchable="true"
                            :createTag="true"
                            :options="[
                                { value: '10000~50000', label: '10,000' },
                                { value: '50001~100000', label: '100,000' },
                                { value: '100001~500000', label: '500,000' },
                                { value: '500001~1000000', label: '1,000,000' },
                            ]"
                        />
                    </li>
                    <li class="multieBlock">
                        <Multiselect
                            v-model="channelObj.value"
                            v-bind="channelObj"
                            mode="tags"
                            placeholder="請選擇使用平台"
                            :searchable="true"
                            :createTag="true"
                            :options="channelsList"
                        />
                    </li>
                    <li class="multieBlock">
                        <Multiselect
                            v-model="sectorObj.value"
                            v-bind="sectorObj"
                            mode="tags"
                            placeholder="請選擇產業類別"
                            :searchable="true"
                            :createTag="true"
                            :options="sectorsList"
                        />
                    </li>
                    
                </ul>
                         
            </ul>
        </div>
        
    </div>
</template>

<script>
// Components
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'

export default {
    name:'kolSetting',
    inject:['reload'],
    components: {
        Multiselect,
    },
    methods:{
        addCase(){
            let channel = this.channelObj.value;
            let sector  = this.sectorObj.value;
            let fans    = this.fansNum.value;

            channel.forEach((item)=>{
                this.channelTags += `${item},`;
            })
            sector.forEach((item)=>{
                this.sectorTags += `${item},`
            })
            fans.forEach((item)=>{
                this.fansNum += `${item},`
            })
            
            let caseInfo = {
                
                "Title": this.caseName,
                "Budget": this.budget,
                "PeopleRequired": this.requireNum,
                "Detail": this.caseContent,
                "PersonInCharge": this.contactor,
                "EndTime": this.dateStr,
                "ProductPicture": this.picName,
                "ChannelTags": this.channelTags,
                "SectorTags": this.sectorTags,
                // "MinimumRequirement": "目前沒有",
            }
            console.log(caseInfo);

            const addAPI = `https://kolperation.rocket-coding.com/api/PostSponsoredContent`

            this.$http
              .post(addAPI,caseInfo,this.config)
              .then( res => {
                  console.log(res);
                  console.log("新增案件成功");
                  this.successAlert('新增案件成功')
                  this.$router.push({ path: `/firmplat/consult`})

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

                    const uploadAPI = `https://kolperation.rocket-coding.com/api/UploadFile`;

                    this.$http
                    .post(uploadAPI,formData,newConfig)
                    .then( res => {
                        console.log('照片上傳成功');
                        console.log(res);
                        this.picName = res.data;
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
            'channelsList' : [],
            'sectorsList'  : [],
            'channelTags'  : "",
            'sectorTags'   : "",
            'userToken'    : null,
            'config'       : null,
            'caseName'     : null,
            'contactor'    : null,
            'requireNum'   : null,
            'budget'       : null,
            'dateStr'      : null,
            'caseContent'  : null,
            'fansNum'      : { value : [] },
            'channelObj'   : { value : [] },
            'sectorObj'    : { value : [] },
            'picName'      : "https://blush.design/api/download?shareUri=WIf-GdxI4gF7Mdhy&c=Hair_0%7Ec38741-0.7%7E0f0f0f-0.8%7Effc943-0.9%7E878787_Skin_0%7Ec26e5e-0.7%7Ef6cbc3-0.8%7Ec26e5e-0.9%7Eecafa3&w=800&h=800&fm=png",
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };

        const channelAPI = `https://kolperation.rocket-coding.com/api/TagChannels`
        const sectorAPI  = `https://kolperation.rocket-coding.com/api/TagSectors`

        // Channels GET
        this.$http
          .get(channelAPI, this.config)
          .then( res => {
              console.log(res);

              let channels = res.data;
              channels.forEach( item => {
                  const title   = item.TagName;
                  const titleId = item.TagId;
                  let channelItem = {
                      value: titleId,
                      label: title
                  }
                  this.channelsList.push(channelItem);
              });
              
              console.log(this.channelsList);
          })
          .catch( err => {
              console.error(err);
          });


        // Sectors GET
        this.$http
          .get(sectorAPI, this.config)
          .then( res => {
              console.log(res);

              let sectors = res.data;
              sectors.forEach( item => {
                  const title   = item.TagName;
                  const titleId = item.TagId;
                  let sectorItem = {
                      value: titleId,
                      label: title
                  }
                  this.sectorsList.push(sectorItem);
              });
              
              console.log(this.sectorsList);
          })
          .catch( err => {
              console.error(err);
          })


    }
}
</script>


<style src="@vueform/multiselect/themes/default.css">
</style>