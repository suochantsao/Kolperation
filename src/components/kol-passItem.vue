<template>
    <ul class="caseItem">
        <img width="18%" src="https://blush.design/api/download?shareUri=ohIQ2_4rspulZPQE&bg=f5f5f5&w=800&h=800&fm=png" alt="">
        <ul class="strBlock">

            <li class="itemTitle">KOL共享空間體驗合作</li>
            <li class="firmName">優雅客新北台北橋創業空間</li>
            <li class="firmMsg sucessDate corpNum cdDate">2021.05.05 洽談成功</li>

        </ul>

        <ul class="sucessBtnBlock saveCaseBtn">

        <li class="favBtnBlock">
            <fa-icon 
                :icon="['far', 'heart']" 
                class="favIcon likeIcon" 
                :class="!favBool === false ? 'dpNone' : '' "
            />
            <fa-icon 
                :icon="['fas', 'heart']" 
                class="favIcon likeIcon selectedIcon" 
                :class="!favBool === true ? 'dpNone' : '' "
            />
        </li>
            
            <a href="#">
            <li class="btn">
                <fa-icon icon="list-ul" class="icon" />
                <span>公司詳情</span>
            </li>    
            </a>
            
        </ul>
    </ul>
</template>

<script>
export default {
    name: "kolPassItem",
    data(){
        return{
            // 'dateStr'  : null,
            // 'caseId'   : null,
            'favBool'  : true,

        }
    },
    created(){
        // this.dateStr    = this.caseItem.SuccessDate.slice(0,10).replace(/-/g,".");
        // this.caseId     = this.caseItem.SponsoredContentId;
        // this.favBool    = this.boolStr;

    }

}
</script>