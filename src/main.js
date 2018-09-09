// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import directive from "@/directive/directive.js";
import filter from "@/filter/filter.js";
// import { store } from "./store";
import store from "./store";
import request from "@/utils/request.js";
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

var time = "";
Vue.prototype.Toast = item => {
  let toast = document.getElementById("toast");
  toast.innerText = item;
  toast.classList.remove("fade");
  toast.style.display = "block";
  clearTimeout(time);
  time = setTimeout(() => {
    toast.classList.add("fade");
    setTimeout(() => {
      toast.style.display = "none";
    }, 2000);
  }, 2000);
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
