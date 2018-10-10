// import Vue from "vue";
import { getVideoFun, recommendList, getDayRecommendList } from "@/api/song";
// import { recommendList } from "@/api/local";
// import { resolve } from "url";
// import { rejects } from "assert";
const song = {
  state: {
    toastisShow: false, //toast是否显示
    alertisShow: false, //alert是否显示
    confirmisShow: false, //confirm是否显示
    songList: [], //歌单
    currentSong: [], //全部
    currentPlay: [], //当前播放的
    currentUrl: "", //当前歌曲的url
    currentIndex: 0, //当前歌曲的索引
    songType: 1, //当前的播放类型，循环，随机，单曲
    isPlay: false, //当前是否在播放
    videoArr: [], //当前可播放的视频
    DayRecommendList: [] //每日推荐歌单列表
  },
  //获取属性
  //改变属性
  mutations: {
    changePlay(state, p) {
      state.isPlay = p;
    },
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
    //歌单数据初始化
    pustSongList(state, payload) {
      state.songList = payload;
    },
    //当前的歌
    currentSong(state, payload) {
      state.currentSong = [];
      state.currentSong.push(payload);
    },
    SET_VIDEO(state, payload) {
      state.videoArr = [];
      state.videoArr.push(payload);
    },
    setDayRecommendList(state, payload) {
      state.DayRecommendList = [];
      state.DayRecommendList = payload;
    }
  },
  //出发mutations
  actions: {
    /**
     * 获取视频
     * @param {} param0
     * @param {*} id
     */
    getVideo({ commit }, id) {
      return new Promise((resolve, reject) => {
        getVideoFun(id)
          .then(resp => {
            const data = resp.data;
            console.log(data);
            commit("SET_VIDEO", data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    /**
     * 获取推荐歌单
     * @param  param0
     */
    getRecommendList({ commit }) {
      return new Promise((resolve, reject) => {
        recommendList()
          .then(resp => {
            const data = resp.data.result;
            commit("pustSongList", data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    /**
     *
     * @param {获取每日推荐}} param0
     */
    getDayRecommendList({ commit }) {
      return new Promise((resolve, reject) => {
        getDayRecommendList()
          .then(resp => {
            const data = resp.data.recommend;
            console.log(data);
            commit("setDayRecommendList", data);
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
export default song;
