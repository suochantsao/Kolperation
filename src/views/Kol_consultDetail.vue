<template>
    <div class="consultDetailBlock msgDialogBlock scrollSpecial">
        <router-link to="/kolplat/consult">
        <fa-icon icon="arrow-left" class="icon" />
        </router-link>
        <div class="consultDetArea">
            <ul class="caseInfo">
                <img width="60%" src="https://blush.design/api/download?shareUri=Qnt8NFR94jtAwxnw&c=Hair_0%7E9b5120-0.1.0%7E0f0f0f-0.1.1%7Ec38741-0.1.2%7Ec38741_Skin_0%7E7d4439-0.1.0%7Ef6cbc3-0.1.1%7Ec26e5e-0.1.2%7E7d4439&w=800&h=800&fm=png">                
                <ul class="conditionBlock">
                    <h1>KOL共享空間體驗合作</h1>
                    <li>優雅客新北台北橋創業空間</li>
                    <li>需求人數：15人</li>
                    <ul>使用平台
                        <li>
                            <fa-icon :icon="['fab', 'instagram']" class="icon likeIcon" />
                            <fa-icon :icon="['fab', 'facebook-square']" class="icon likeIcon" />
                            <fa-icon :icon="['fab', 'youtube']" class="icon likeIcon" />
                        </li>
                    </ul>
                </ul>
                <fa-icon :icon="['far', 'heart']" class="icon likeIcon" />
            </ul>
            <ul></ul>
        </div>

    </div>
</template>