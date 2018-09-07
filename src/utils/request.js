import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const request = request;
