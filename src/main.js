// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { store } from "./store";

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:3000";
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
