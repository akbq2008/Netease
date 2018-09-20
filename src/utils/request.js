import Vue from "vue";
import axios from "axios";
import { store } from "../store";
import router from "vue-router";
const $axios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  timeout: 5000
});

// request interceptor
$axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    // console.log(config);

    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone interceptor
$axios.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    if (res && res.code == "-460") {
      store.dispatch("LogOut");
      router.push("/login");
    } else {
      return response;
    }
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = $axios;
export default $axios;
