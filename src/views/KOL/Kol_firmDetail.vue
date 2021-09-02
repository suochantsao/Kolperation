<template>
  <div class="firmDetailBlock consultDetailBlock msgDialogBlock scrollSpecial">
    <a @click="routerSet">
      <fa-icon icon="arrow-left" class="icon" />
    </a>
    <div class="firmDetArea consultDetArea firmDetArea">
      <ul class="caseBasic">
        <img width="30%" :src="firmPic" />
        <ul class="conditionBlock">
          <h1>{{ firmName }}</h1>
          <kol-sector-item :sectors="sectorList"> </kol-sector-item>
          <li class="budget successNum">成功洽談 : {{ successNum }} 次</li>
        </ul>

        <btn-add-fav
          :boolStr="saveBool"
          :definedId="firmStr"
          :contentId="companyId"
        ></btn-add-fav>
      </ul>

      <ul class="caseInfo">
        <ul class="caseDetail">
          <li class="blockTitle">公司簡介</li>
          <p>
            {{ firmIntro }}<br />
            1.文章以正面回饋為主，體驗中有任何建議請直接反應<br />
            2.標題上請勿出現類似邀稿，試用文字<br />
            3.文章連結與圖文須同意我們作為廣告連結(Google & FB)
            或使用.修改或重製您提供的照片.影音等素材或引用部分內容使用於後續銷售宣傳
          </p>
        </ul>
        <ul class="caseRequire">
          <li class="blockTitle">公司資訊</li>
          <ul class="requireBlock">
            <li>
              <fa-icon icon="users" class="icon" />
              <span>聯繫人 : {{ firmContact }}</span>
            </li>
            <li class="longArea">
              <fa-icon icon="users" class="icon" />
              <span>地址 : {{ firmAddress }}</span>
            </li>
            <li>
              <fa-icon icon="users" class="icon" />
              <span>電話 : {{ firmCellphone }}</span>
            </li>
            <li class="longArea">
              <fa-icon icon="users" class="icon" />
              <span>Email : {{ firmEmail }}</span>
            </li>
          </ul>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
// Components
import btnAddFav from "../../components/btn-addFav.vue";
import KolSectorItem from "../../components/kol-sectorItem.vue";

export default {
  name: "firmDetail",
  methods: {
    routerSet() {
      this.$router.back(-1);
    },
  },
  components: {
    btnAddFav,
    KolSectorItem,
  },
  data() {
    return {
      saveBool: "",
      companyId: null,
      firmDetail: null,
      firmName: null,
      firmPic: null,
      successNum: 0,
      sectorList: [],
      firmEmail: "暫不提供",
      firmIntro: "暫不提供",
      firmContact: "暫不提供",
      firmAddress: "暫不提供",
      firmCellphone: "暫不提供",
      firmStr: "company",
    };
  },
  created() {
    this.companyId = this.$route.query.company;

    const firmGuid = this.$route.query.firm;
    const userToken = window.localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${userToken}` } };
    const firmAPI = `https://kolperation.rocket-coding.com/api/GetCompany/${firmGuid}`;

    this.$http
      .get(firmAPI, config)
      .then((res) => {
        console.log(res);
        this.firmDetail = res.data;

        if (this.firmDetail.CompanyProfile !== null) {
          this.firmIntro = this.firmDetail.CompanyProfile;
        }
        if (this.firmDetail.Cellphone !== null) {
          this.firmCellphone = this.firmDetail.Cellphone;
        }
        if (this.firmDetail.Email !== null) {
          this.firmEmail = this.firmDetail.Email;
        }
        if (this.firmDetail.PersonInCharge !== null) {
          this.firmContact = this.firmDetail.PersonInCharge;
        }
        if (this.firmDetail.Address !== null) {
          this.firmAddress = this.firmDetail.Address;
        }

        this.sectorList = this.firmDetail.Sectors;
        this.firmName = this.firmDetail.Company;
        this.successNum = this.firmDetail.CoopSuccessTimes;
        this.firmPic = this.firmDetail.CompanyLogo;
        const mdfkBool = this.firmDetail.Favorite;
        console.log(mdfkBool);
        if (mdfkBool === true) {
          this.saveBool = true;
        } else if (mdfkBool === false) {
          this.saveBool = false;
        }
        console.log(this.saveBool);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
