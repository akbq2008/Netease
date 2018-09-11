import request from "@/utils/request";
export function getVideoFun(id) {
  return request("/mv?mvid=" + id);
}
