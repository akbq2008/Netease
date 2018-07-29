<template>
  <div id="app">
    <router-view/>
    <app-message></app-message>
  </div>
</template>

<script>
//公共部分
import Message from "./components/common/Message";
export default {
  name: "App",
  components: {
    "app-message": Message
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
