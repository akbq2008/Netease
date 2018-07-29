import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  // 设置属性
  state: {
    toastisShow: false, //toast是否显示
    alertisShow: false, //alert是否显示
    confirmisShow: false //confirm是否显示
  },
  //获取属性
  getters: {},
  //改变属性
  mutations: {},
  //出发mutations
  actions: {}
});
