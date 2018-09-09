import { resolve } from "url";
import { rejects } from "assert";
import { Login } from "@/api/login";

const user = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LoginByPhone({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        Login(phone, password)
          .then(response => {
            resolve();
          })
          .catch(err => reject(err));
      });
    }
  }
};

export default user;
