<template>
    <div class="consultDetailBlock msgDialogBlock scrollSpecial">
        <router-link to="/kolplat/consult">
        <fa-icon icon="arrow-left" class="icon" />
        </router-link>
        <div class="consultDetArea">
            <ul class="caseBasic">
                <img width="60%" src="https://blush.design/api/download?shareUri=Qnt8NFR94jtAwxnw&c=Hair_0%7E9b5120-0.1.0%7E0f0f0f-0.1.1%7Ec38741-0.1.2%7Ec38741_Skin_0%7E7d4439-0.1.0%7Ef6cbc3-0.1.1%7Ec26e5e-0.1.2%7E7d4439&w=800&h=800&fm=png">                
                <ul class="conditionBlock">
                    <h1>KOL共享空間體驗</h1>
                    <li>優雅客新北台北橋創業空間</li>
                    <li class="budget">合作預算： $30,000</li>
                    <li class="needsNum">需求人數： 15人</li>
                    <li class="mediaRequest">
                        <fa-icon :icon="['fab', 'instagram']" class="icon" />
                        <fa-icon :icon="['fab', 'facebook-square']" class="icon" />
                        <fa-icon :icon="['fab', 'youtube']" class="icon" />
                    </li>
                </ul>
                <fa-icon :icon="['far', 'heart']" class="favIcon" />
                <!-- <fa-icon :icon="['fas', 'heart']" class="selectIcon" /> -->
            </ul>

            <ul class="caseInfo">
                <ul class="caseDetail">
                    <li class="blockTitle">合作內容</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptatem ullam eius nulla doloribus nisi illum! Ipsum officia nam sequi? Quibusdam ea, sunt hic fugiat, alias ipsa voluptates libero pariatur perspiciatis necessitatibus perferendis nostrum veritatis neque similique animi, cupiditate ut saepe tempora ipsum atque. Veritatis quisquam sequi dolor vero aliquid maiores veniam aspernatur magni, ipsa culpa ipsum animi, asperiores quis suscipit magnam molestiae quae ratione ducimus deserunt consectetur adipisci reprehenderit voluptatibus, dolorem facilis! Non maxime repellendus distinctio placeat vero odio dolorum sit, ipsum magnam mollitia expedita, in rerum enim. Facere minima suscipit odio iusto officiis quis ad qui sint. Nobis.</p>
                    
                </ul>
                <ul class="caseRequire">
                    <li class="blockTitle">需求條件</li>
                    <ul class="requireBlock">
                        <li>
                            <fa-icon icon="users" class="icon" />
                            <span>追蹤人數：10,000人</span>
                        </li>
                        <li>
                            <fa-icon icon="utensils" class="icon" />
                            <span>餐飲相關產業</span>
                        </li>
                    </ul>
                </ul>
            </ul>
        </div>

    </div>
</template>