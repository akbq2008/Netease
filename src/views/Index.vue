<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./header/Header";
import Footer from "./footer/Footer";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style scoped>
</style>