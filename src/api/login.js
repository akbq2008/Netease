import request from "@/utils/request";
export function Login(username, password) {
  return request(
    "/login/cellphone?phone=" + username + "&password=" + password
  );
}

export function getUser(uid) {
  return request("/user/detail?uid=" + uid);
}
