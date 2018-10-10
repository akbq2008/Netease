import request from "@/utils/request";
export function getVideoFun(id) {
  return request("/mv?mvid=" + id);
}
/**
 * 推荐歌单
 */
export function recommendList() {
  return request("/personalized");
}

export function getDayRecommendList() {
  return request("/recommend/songs");
}
