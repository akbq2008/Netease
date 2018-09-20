import { Login, getUser } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

const user = {
  state: {
    token: getToken(),
    userInfo: [], //登录后的用户信息
    id: "" //用户id
  },
  getters: {},
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER(state, p) {
      state.userInfo.push(p);
    },
    SET_ID(state, p) {
      state.id = p;
    },
    //存取数据
    putloginInfo(state, payload) {
      state.userInfo.push(payload);
      payload = JSON.stringify(payload);
      console.log(payload);
      localStorage.setItem("userInfo", payload);
    }
  },
  actions: {
    LoginByPhone({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        Login(userInfo.phone, userInfo.password)
          .then(response => {
            const data = response.data;
            commit("SET_TOKEN", data.clientId);
            commit("SET_ID", data.account.id);
            localStorage.setItem("userId", data.account.id);
            setToken(data.clientId);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    setId(context, payload) {
      context.commit("SET_ID", payload);
    },
    getUserInfo({ commit }, uid) {
      return new Promise((resolve, reject) => {
        getUser(uid)
          .then(response => {
            const data = response.data;
            commit("SET_USER", data);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        // const data=
        commit("SET_TOKEN", "");
        commit("SET_ID", "");
        localStorage.removeItem("userId");
        removeToken();
        resolve();
      }).catch(err => {
        reject(err);
      });
    }
  }
};

export default user;
