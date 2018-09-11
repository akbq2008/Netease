<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view/>
      <!-- <app-footer v-if="$route.path!=='/login'&&$route.path!=='/phoneLogin'&&$route.path!=='/register'&&$route.path!=='currentPlay'"></app-footer> -->
    </keep-alive>
    <router-view v-else/>
    <app-footer></app-footer>
    <!-- <app-footer v-if="$route.path!=='/login'&&$route.path!=='/phoneLogin'&&$route.path!=='/register'&&$route.path!=='currentPlay'"></app-footer> -->
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
  methods: {},
  created() {},
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
