<template>
    <div class="kolMesBlock  msgDialogBlock firmFansBlock" 
        @click="secSelected"
    >
        <a @click="routerSet">
            <fa-icon icon="arrow-left" class="icon" />
        </a>
        <div class="container trialContent searchfirmBlock searchSec">
                <h2><span>合作案件搜尋</span></h2>  

                <span class="titleDescrip">請選擇KOL的粉絲人數</span>
                <ul class="industryBlock contentBlock searchFirmArea "
                >
                    <li 
                      class="industItem"
                      :class="tenKBool === true ? 'selectItem' : '' "
                      @click="selectPlat('tenK')"
                    >
                        <fa-icon icon="user" class="icon" />
                        <span>10,000</span>
                    </li>
                    <li 
                      class="industItem"
                      :class="hundredKBool === true ? 'selectItem' : '' "
                      @click="selectPlat('hundK')"
                    >
                        <fa-icon icon="user-alt" class="icon" />
                        <span>100,000</span>
                    </li>
                    <li 
                      class="industItem"
                      :class="fHundKBool === true ? 'selectItem' : '' "
                      @click="selectPlat('fHunKId')"
                    >
                        <fa-icon icon="user-friends" class="icon lineStyle" />
                        <span>500,000</span>
                    </li>
                    <li 
                      class="industItem"
                      :class="thoudKBool === true ? 'selectItem' : '' "
                      @click="selectPlat('thoudKId')"
                    >
                        <fa-icon icon="users" class="icon lineStyle" />
                        <span>1,000,000</span>
                    </li>
                </ul>
                
                <router-link 
                  :to="{ name: 'Firm_searchLoad', query: { channels: `${channelItem}`, sectors: `${sectorItem}`, fans: `${tenKId}${hundKId}${fHunKIdId}${thoudKIdId}`}}"
                >
                    <span class="nxtBtn">下一步</span>
                </router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'search',
    methods:{
        secSelected(){
            if( this.tenKBool === true ){
                this.tenKId = '10000~50000,';
            }
            if( this.hundredKBool=== true ){
                this.hundKId =  '50001~100000,';
            }
            if( this.fHundKBool === true ){
                this.fHunKIdId = '100001~500000,';
            }
            if( this.thoudKBool === true ){
                this.thoudKIdId =  '500001~1000000,';
            }
            
        },
        selectPlat(sector){

            if( sector === 'tenK' ){
                this.tenKBool = !this.tenKBool;
                
            }
            else if( sector === 'hundK' ){
                this.hundredKBool = !this.hundredKBool;
            }
            else if( sector === 'fHunKId' ){
                this.fHundKBool = !this.fHundKBool;
            }
            else if( sector === 'thoudKId' ){
                this.thoudKBool = !this.thoudKBool;
            }

        },
        routerSet(){
            this.$router.back(-1);
        },
    },
    data(){
        return{
            'channelItem'  : {}, 
            'sectorItem'   : {},
            'tenKBool'     : false,
            'hundredKBool' : false,
            'fHundKBool'   : false,
            'thoudKBool'   : false,
            'tenKId'       : '',
            'hundKId'      : '',
            'fHunKIdId'    : '',
            'thoudKIdId'   : '',
        }
    },
    created(){
        this.channelItem = this.$route.query.channels;
        this.sectorItem  = this.$route.query.sectors;
        console.log(this.channelItem);
        console.log(this.sectorItem);
    }
    
}
</script>