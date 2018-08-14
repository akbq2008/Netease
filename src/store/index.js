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
    userInfo: [], //登录后的用户信息
    currentPlay: [], //当前播放的
    currentUrl: "", //当前歌曲的url
    currentIndex: 0, //当前歌曲的索引
    songType: 1, //当前的播放类型，循环，随机，单曲
    // currentTime: 0, //当前播放时间
  },
  //获取属性
  getters: {
    // nextIndex: state => {
    //   console.log(state.currentIndex);
    //   return state.currentIndex + 1;
    // }
  },
  //改变属性
  mutations: {
    // 当前的播放时长
    // PutcurrentTime(state, p) {
    //   state.currentTime = 0;
    //   state.currentTime = p;
    // },
    // 当前的播放类型
    putsongType(state, p) {
      state.songType = p;
    },
    // 当前歌的index
    currentSongIndex(state, p) {
      state.currentIndex = p;
    },
    // 获取当前播放的歌的URL
    CurrentSongUrl(state, payload) {
      state.currentUrl = payload;
    },
    // 获取当前播放的歌
    putCurrentSong(state, payload) {
      state.currentPlay = [];
      payload.isPlay = true;
      state.currentPlay.push(payload);
    },
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
