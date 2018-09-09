import Vue from "vue";
import Vuex from "vuex";
import song from "./modules/song";
Vue.use(Vuex);
export const store = new Vuex.Store({
  // 设置属性
  modules: {
    song: song
  }
});

export default store;
