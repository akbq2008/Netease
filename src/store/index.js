import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  // 设置属性
  state: {
    toastisShow: false, //toast是否显示
    alertisShow: false, //alert是否显示
    confirmisShow: false, //confirm是否显示
    songList: [], //歌单
    currentSong: [], //全部
    userInfo: [] //登录后的用户信息
  },
  //获取属性
  getters: {},
  //改变属性
  mutations: {
    //清空用户信息
    clearUserInfo(state, payload) {
      state.userInfo = payload;
    },
    //存取数据
    putloginInfo(state, payload) {
      state.userInfo.push(payload);
      payload = JSON.stringify(payload);
      console.log(payload);
      localStorage.setItem("userInfo", payload);
    },
    // localStorege中的信息
    putLogin(state, payload) {
      state.userInfo = payload;
    },
    //歌单数据初始化
    pustSongList(state, payload) {
      state.songList = payload;
    },
    //当前的歌
    currentSong(state, payload) {
      state.currentSong = [];
      state.currentSong.push(payload);
    }
  },
  //出发mutations
  actions: {}
});
