<template>
  <div id="app">
    <span class="titleDescrip">1. 請選擇您想要合作的平台媒體</span>

    <ul class="socialBlock contentBlock" @click="platSelected">
      <li
        class="socialItem"
        :class="fbBool === true ? 'selectItem' : ''"
        @click="selectPlat('fb')"
      >
        <img width="100%" src=".../assets/img/facebook.svg" alt="" />
        <span>Facebook</span>
      </li>

      <li
        class="socialItem"
        :class="igBool === true ? 'selectItem' : ''"
        @click="selectPlat('ig')"
      >
        <img width="100%" src=".../assets/img/instagram.svg" alt="" />
        <span>Instagram</span>
      </li>

      <li
        class="socialItem"
        :class="ytBool === true ? 'selectItem' : ''"
        @click="selectPlat('yt')"
      >
        <img width="100%" src=".../assets/img/youtube.svg" alt="" />
        <span>Youtuber</span>
      </li>
    </ul>

    <router-link
      :to="{ name: 'Second', query: { channels: `${fbId}${igId}${ytId}` } }"
      class="txtBlue"
    >
      <span class="nxtBtn">下一步</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "trial_first",
  methods: {
    platSelected() {
      if (this.fbBool === true) {
        this.fbId = "01,";
      }

      if (this.igBool === true) {
        this.igId = "02,";
      }

      if (this.ytBool === true) {
        this.ytId = "03,";
      }
    },
    selectPlat(plat) {
      if (plat === "fb") {
        this.fbBool = !this.fbBool;
      } else if (plat === "ig") {
        this.igBool = !this.igBool;
      } else if (plat === "yt") {
        this.ytBool = !this.ytBool;
      }
    },
  },
  data() {
    return {
      fbBool: false,
      igBool: false,
      ytBool: false,
      fbId: "",
      igId: "",
      ytId: "",
    };
  },
};
</script>
