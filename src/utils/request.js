import Vue from "vue";
import axios from "axios";

// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.withCredentials = true;
const $axios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  timeout: 5000
});
Vue.prototype.$axios = $axios;
$axios.interceptors.request.use(
  config => {
    // if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    //     config.headers.Authorization = token;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
$axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 这里写清除token的代码
          router.replace({
            path: "login",
            query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
          });
      }
    }
    return Promise.reject(error.response.data);
  }
);
export const request = request;
