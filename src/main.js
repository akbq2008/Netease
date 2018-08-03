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
axios.defaults.withCredentials = true;
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
Vue.filter("timeTo", function(value, s) {
  if (!value) return "-";
  let date = new Date();
  date.setTime(value * 1000);
  let y = date.getFullYear() - 2000;
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  let time = "";
  s === 1
    ? (time = y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second)
    : (time = y + "-" + m + "-" + d);
  if (y < 0) {
    time = "无";
  }
  return time;
});
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
