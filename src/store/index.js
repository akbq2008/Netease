import Vue from "vue";
import Vuex from "vuex";
import song from "./modules/song";
import user from "./modules/user";
import getters from './getters'
Vue.use(Vuex);
export const store = new Vuex.Store({
  // 设置属性
  modules: {
    song,
    user
  },
  getters
});

export default store;
