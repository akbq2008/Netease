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
    loginMes: [] //登录后的用户信息
  },
  //获取属性
  getters: {},
  //改变属性
  mutations: {
    //
    islogin(state, payload) {
      state.loginMes.push(payload);
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
