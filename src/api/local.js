import request from "@/utils/request";
/**
 * 推荐歌单
 */
export function recommendList() {
  return request("/personalized");
}
