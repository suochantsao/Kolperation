<template>
    <div id="app" >
        <span class="titleDescrip">2. 請選擇您想要合作的產業類型</span>

        <ul class="industryBlock contentBlock"
         @click="secSelected"   
        >
            <li 
                class="industItem"
                :class="gameBool === true ? 'selectItem' : '' "
                @click="selectPlat('game')"
            >
                <fa-icon icon="gamepad" class="icon" />
                <span>遊戲</span>
            </li>
            <li 
                class="industItem"
                :class="videoBool === true ? 'selectItem' : '' "
                @click="selectPlat('video')"
            >
                <fa-icon icon="video" class="icon" />
                <span>影視</span>
            </li>
            <li 
                class="industItem"
                :class="sportsBool === true ? 'selectItem' : '' "
                @click="selectPlat('sports')"
            >
                <fa-icon icon="basketball-ball" class="icon lineStyle" />
                <span>運動</span>
            </li>
            <li 
                class="industItem"
                :class="foodsBool === true ? 'selectItem' : '' "
                @click="selectPlat('foods')"
            >
                <fa-icon icon="utensils" class="icon lineStyle" />
                <span>餐飲</span>
            </li>
        </ul>

        <ul class="industryBlock contentBlock"
            @click="secSelected"   
        >
            <li 
                class="industItem"
                :class="techBool === true ? 'selectItem' : '' "
                @click="selectPlat('tech')"
            >
                <fa-icon icon="desktop" class="icon" />
                <span>科技</span>
            </li>
            <li 
                class="industItem"
                :class="fashionBool === true ? 'selectItem' : '' "
                @click="selectPlat('fashion')"
            >
                <fa-icon icon="glasses" class="icon" />
                <span>時尚</span>
            </li>
            <li 
                class="industItem"
                :class="lifeBool === true ? 'selectItem' : '' "
                @click="selectPlat('life')"
            >
                <fa-icon icon="building" class="icon lineStyle" />
                <span>生活</span>
            </li>
            <li 
                class="industItem"
                :class="petsBool === true ? 'selectItem' : '' "
                @click="selectPlat('pets')"
            >
                <fa-icon icon="paw" class="icon lineStyle" />
                <span>寵物</span>
            </li>

        </ul>
        
        <!-- <router-link to="/trial/loader" class="txtBlue"> -->
        <router-link 
          :to="{ name: 'Loader', query: { channels: `${channelItem}`, sectors: `${gameId}${videoId}${sportsId}${foodsId}${techId}${fashionId}${lifeId}${petsId}`}}"
          class="txtBlue"
        >
            <span class="nxtBtn">下一步</span>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'trial_second',
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
            if( this.techBool === true ){
                this.techId = '07,';
            }
            if( this.fashionBool === true ){
                this.fashionId = '08,';
            }
            if( this.lifeBool === true ){
                this.lifeId= '01,';
            }
            if( this.petsBool === true ){
                this.petsId = '02,';
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
            else if( sector === 'tech' ){
                this.techBool = !this.techBool;
            }
            else if( sector === 'fashion'){
                this.fashionBool = !this.fashionBool;
            }
            else if( sector === 'life' ){
                this.lifeBool = !this.lifeBool;
            }
            else if( sector === 'pets' ){
                this.petsBool = !this.petsBool;
            }

        }
    },
    data(){
        return{
            'channelItem': {}, 
            'gameBool'   : false,
            'videoBool'  : false,
            'sportsBool' : false,
            'foodsBool'  : false,
            'techBool'   : false,
            'fashionBool': false,
            'lifeBool'   : false,
            'petsBool'   : false,
            'gameId'     : '',
            'videoId'    : '',
            'sportsId'   : '',
            'foodsId'    : '',
            'techId'     : '',
            'fashionId'  : '',
            'lifeId'     : '',
            'petsId'     : '',
        }
    },
    created(){
        this.channelItem = this.$route.query.channels;
        console.log(this.channelItem);
    }
}
</script>

