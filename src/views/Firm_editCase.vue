<template>
    <div class="kolMesBlock kolSetBlock firmSetBlock firmAddBlock">
        <ul class="setTitle">
            <h1>修改案件</h1>
            <li 
              class="specBtn"
              @click="editCase"
            >
                <fa-icon icon="check" class="icon" />
                <span>確認修改</span>
            </li>
        </ul>
        <div class="mesArea alertArea caseInfo">
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
                            v-model="caseDetail.Title"
                        >
                    </li>
                    
                    <ul class="twoInput">
                        <li class="infoItem">
                            <fa-icon icon="user" class="icon" />
                            <input 
                                type="text" 
                                placeholder="此案件聯絡人"
                                v-model="caseDetail.PersonInCharge"
                            >
                        </li>          
                        <li class="infoItem padSet">
                            <fa-icon icon="user" class="icon" />
                            <input 
                                type="text" 
                                placeholder="需求人數"
                                v-model="caseDetail.PeopleRequired"
                            >
                        </li> 
                    </ul>
                    <ul class="twoInput">
                        <li class="infoItem">
                            <fa-icon icon="user" class="icon" />
                            <input 
                                type="text" 
                                placeholder="合作預算金額"
                                v-model="caseDetail.Budget"
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
                            v-model="caseDetail.Detail"
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
                    
                    
                    <li 
                      class="selectBtn closeCase pauseBtn"
                      @click="closeCase"
                    >
                        <fa-icon icon="check" class="icon" />
                        <span>提前結束</span>
                    </li>
                    <li 
                      class="selectBtn closeCase"
                      @click="deleteCase"
                    >
                        <fa-icon icon="check" class="icon" />
                        <span>刪除案件</span>
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
        closeCase(){
            this.$swal({
                title: '確認要提前結束此案件嗎?',
                showDenyButton: true,
                icon: 'warning',
                confirmButtonText: `取消`,
                denyButtonText: `確認`,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log('取消提前結束');
                    } 
                    else if (result.isDenied) {

                        const closeAPI = `https://kolperation.rocket-coding.com/api/CloseSponsoredContent/${this.caseId}`

                        this.$http
                        .put(closeAPI,this.caseId,this.config)
                        .then( res => {
                            console.log(res);
                            console.log("提前結束此案件了啦");
                            this.successAlert('提前結束此案件');
                            this.$router.push({ path: `/firmplat/consult`})

                        })
                        .catch( err => {
                            console.error(err);
                        });

                    }
            });
        },
        editCase(){
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
                
                "Title": this.caseDetail.Title,
                "Budget": this.caseDetail.Budget,
                "PeopleRequired": this.caseDetail.PeopleRequired,
                "Detail": this.caseDetail.Detail,
                "PersonInCharge": this.caseDetail.PersonInCharge,
                "EndTime": this.dateStr,
                // "MinimumRequirement": "目前沒有",
                // "ChannelTags": "01,02",
                // "SectorTags": "06,07",
                "ProductPicture":this.picName,
                "ScId": this.caseId,
            }
            console.log(caseInfo);

            const editAPI = `https://kolperation.rocket-coding.com/api/PutSponsoredContent/${this.caseId}`;

            this.$http
              .put(editAPI,caseInfo,this.config)
              .then( res => {
                  console.log(res);
                  console.log("修改案件成功");
                  this.successAlert('修改案件成功')
                  this.$router.back(-1);
              })
              .catch( err => {
                  console.error(err);

              })
        },
        deleteCase(){
            this.$swal({
                title: '確認要刪除此案件嗎?',
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
                        
                        const delAPI = `https://kolperation.rocket-coding.com/api/DeleteSponsoredContent/${this.caseId}`

                        if( this.caseDetail.PeopleCoopWith !== 0){
                            
                            this.$http
                            .delete(delAPI,this.config)
                            .then( res => {
                                console.log(res);
                                console.log("刪除案件成功");
                                this.successAlert('案件刪除成功');
                                this.$router.push({ path: `/firmplat/consult`})
    
                            })
                            .catch( err => {
                                console.error(err);
                            });
                        }
                        else{
                            this.$swal({
                                icon: 'error',
                                title: '無法刪除此案件',
                                text: '您已經有成功洽談的對象，所以無法刪除',
                            })
                        }
                        

                    }
            });
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
            'userToken'    : null,
            'config'       : null,
            'caseId'       : null,
            'caseDetail'   : null,
            'dateStr'      : null,
            'picName'      : null,
            'fansNum'      : { value : [] },
            'channelObj'   : { value : [] },
            'sectorObj'    : { value : [] },
        }
    },
    created(){
        this.userToken = window.localStorage.getItem('token');
        this.config    = { headers: { Authorization: `Bearer ${this.userToken}` } };
        this.caseId    = this.$route.query.case;
        console.log(this.caseId);

        const channelAPI = `https://kolperation.rocket-coding.com/api/TagChannels`
        const sectorAPI  = `https://kolperation.rocket-coding.com/api/TagSectors`
        const caseAPI    = `https://kolperation.rocket-coding.com/api/GetOnGoingCoopSC/${this.caseId}`

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

        // Case Detail GET
        this.$http
          .get(caseAPI, this.config)
          .then( res => {
              console.log(res);
              this.caseDetail       = res.data;
              this.dateStr          = this.caseDetail.EndTime.slice(0,10).replace(/-/g,".");
              this.picName          = this.caseDetail.Picture;
          })
          .catch( err => {
              console.error(err);
          })


    }
}
</script>


<style src="@vueform/multiselect/themes/default.css">
</style>