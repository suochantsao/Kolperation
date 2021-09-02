<template>
  <div class="kolMesBlock">
    <h2 class="topTitle">業主邀請</h2>
    <div class="alertArea scrollStyle">
      <kol-invite-item
        :caseItem="item"
        :key="item.SponsoredContentId"
        v-for="item in inviteCaseList"
      ></kol-invite-item>
    </div>

    <h2>報名案件</h2>
    <div class="mesArea alertArea applyArea scrollStyle">
      <kol-apply-item
        :caseItem="item"
        :key="item.SponsoredContentId"
        v-for="item in applyCaseList"
      ></kol-apply-item>
    </div>
  </div>
</template>

<script>
// Components
import kolInviteItem from "../../components/kol-inviteItem.vue";
import KolApplyItem from "../../components/kol-applyItem.vue";

export default {
  components: {
    kolInviteItem,
    KolApplyItem,
  },
  data() {
    return {
      inviteCaseList: [],
      applyCaseList: [],
      userToken: null,
    };
  },
  created() {
    this.userToken = window.localStorage.getItem("token");
    const inviteCaseAPI =
      "https://kolperation.rocket-coding.com/api/GetKOLinvitatedCoop";
    const applyCaseAPI =
      "https://kolperation.rocket-coding.com/api/GetKOLsentCoop";
    const config = { headers: { Authorization: `Bearer ${this.userToken}` } };

    this.$http
      .get(inviteCaseAPI, config)
      .then((res) => {
        this.inviteCaseList = res.data;
        console.log(this.inviteCaseList);
      })
      .catch((err) => {
        console.error(err);
      });

    this.$http
      .get(applyCaseAPI, config)
      .then((res) => {
        this.applyCaseList = res.data;
        console.log(this.applyCaseList);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
