<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <keep-alive>
      <app-footer></app-footer>
    </keep-alive>
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