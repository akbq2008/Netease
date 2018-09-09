<template>
  <div id="app">
    <router-view/>
    <keep-alive>
      <app-footer v-if="$route.path!=='/login'&&$route.path!=='/phoneLogin'"></app-footer>
    </keep-alive>
    <app-message></app-message>
  </div>
</template>

<script>
//公共部分
import Message from "views/common/Message";
import Footer from "views/footer/Footer";
import Vue from "vue";
export default {
  name: "App",
  methods: {
    // refreshToken() {
    //   if (this.$store.state) {
    //     let refreshTime = this.$store.state.userInfo[0].bindings[0].refreshTime;
    //     let expiresIn = this.$store.state.userInfo[0].bindings[0].expiresIn;
    //     // console.log(this);
    //     let myFilter = Vue.filter("timeTo");
    //     // console.log(myFilter(refreshTime, 1), myFilter(expiresIn, 1));
    //   }
    // }
  },
  created() {
    // localStorage.getItem("isLogin") && !this.$store.state.userInfo
    //   ? (this.$store.state.userInfo = localStorage.getItem("userInfo"))
    //   : this.$store.state.userInfo;
    let arr = [];
    arr.push(JSON.parse(localStorage.getItem("userInfo")));
    if (
      localStorage.getItem("isLogin") &&
      this.$store.state.song.userInfo.length === 0
    ) {
      this.$store.commit("putLogin", arr);
    }
  },
  mounted() {
    // this.refreshToken();
  },
  components: {
    "app-message": Message,
    "app-footer": Footer
  }
};
</script>

<style>
/* 不要直接在index.html引入，直接important就好 */
@import url("./assets/css/theme_origin.css");
html {
  min-height: 100vh;
}
.fade {
  animation: faded 2s linear;
  opacity: 0;
}
@keyframes faded {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
