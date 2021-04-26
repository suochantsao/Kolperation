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
                      :class="gameBool === true ? 'selectItem' : '' "
                      @click="selectPlat('game')"
                    >
                        <fa-icon icon="user" class="icon" />
                        <span>10,000</span>
                    </li>
                    <li 
                      class="industItem"
                      :class="videoBool === true ? 'selectItem' : '' "
                      @click="selectPlat('video')"
                    >
                        <fa-icon icon="user-alt" class="icon" />
                        <span>100,000</span>
                    </li>
                    <li 
                      class="industItem"
                      :class="sportsBool === true ? 'selectItem' : '' "
                      @click="selectPlat('sports')"
                    >
                        <fa-icon icon="user-friends" class="icon lineStyle" />
                        <span>500,000</span>
                    </li>
                    <li 
                      class="industItem"
                      :class="foodsBool === true ? 'selectItem' : '' "
                      @click="selectPlat('foods')"
                    >
                        <fa-icon icon="users" class="icon lineStyle" />
                        <span>1,000,000</span>
                    </li>
                </ul>
                
                <!-- to="/kolplat/searchloader" -->
                <router-link 
                  :to="{ name: 'Firm_searchFans', query: { channels: `${channelItem}`, sectors: `${gameId}${videoId}${sportsId}${foodsId}${techId}${fashionId}${lifeId}${petsId}`}}"
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
            if( this.gameBool === true ){
                this.gameId = '03,';
            }
            if( this.videoBool=== true ){
                this.videoId =  '04,';
            }
            if( this.sportsBool === true ){
                this.sportsId = '05,';
            }
            if( this.foodsBool === true ){
                this.foodsId =  '06,';
            }
            
        },
        selectPlat(sector){

            if( sector === 'game' ){
                this.gameBool = !this.gameBool;
                
            }
            else if( sector === 'video' ){
                this.videoBool = !this.videoBool;
            }
            else if( sector === 'sports' ){
                this.sportsBool = !this.sportsBool;
            }
            else if( sector === 'foods' ){
                this.foodsBool = !this.foodsBool;
            }

        },
        routerSet(){
            this.$router.back(-1);
        },
    },
    data(){
        return{
            'channelItem': {}, 
            'gameBool'   : false,
            'videoBool'  : false,
            'sportsBool' : false,
            'foodsBool'  : false,
            'gameId'     : '',
            'videoId'    : '',
            'sportsId'   : '',
            'foodsId'    : '',
        }
    },
    created(){
        this.channelItem = this.$route.query.channels;
        console.log(this.channelItem);
    }
    
}
</script>