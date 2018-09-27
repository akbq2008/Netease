import Vue from "vue";
Vue.filter("timeTo", function(value, s) {
  if (!value) return "-";
  let date = new Date();
  date.setTime(value * 1000);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  let time = "";
  s === 1
    ? (time = y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second)
    : (time = y + "-" + m + "-" + d);
  if (y < 0) {
    time = "无";
  }
  return time;
});

Vue.filter("timeFormatter", (value, s) => {
  if (!value) {
    return "00:00";
  }
  if (!s) {
    let minute = Math.floor(value / 60);
    minute < 10 ? (minute = "0" + minute) : minute;
    let seconds = Math.floor(value % 60);
    seconds < 10 ? (seconds = "0" + seconds) : seconds;
    return minute + ":" + seconds;
  }
});
export const filter = filter;
