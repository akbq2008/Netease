<template>
  <div class="header">
    <div class="header_menu origin_bg">
      <!-- 菜单 -->
      <mu-icon value="menu" color="#fff" right @click="showLogin"></mu-icon>
      <div>
        <router-link to="/local">
          <svg t="1532580961586" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2484" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M179.2 1024C81.454545 1024 0 944.872727 0 844.8s79.127273-179.2 179.2-179.2c39.563636 0 76.8 13.963636 109.381818 37.236364l9.309091 6.981818V134.981818c0-34.909091 27.927273-62.836364 60.509091-62.836363l598.109091-69.818182h4.654545C993.745455 0 1024 27.927273 1024 62.836364v672.581818c0 48.872727-18.618182 93.090909-53.527273 125.672727-32.581818 32.581818-79.127273 51.2-125.672727 51.2-97.745455 0-179.2-79.127273-179.2-179.2 0-97.745455 79.127273-179.2 179.2-179.2 39.563636 0 79.127273 13.963636 109.381818 37.236364l9.309091 6.981818V286.254545l-605.090909 65.163637v493.381818c-2.327273 100.072727-81.454545 179.2-179.2 179.2z m0-295.563636c-65.163636 0-118.690909 53.527273-118.690909 118.690909s53.527273 118.690909 118.690909 118.690909 118.690909-53.527273 118.690909-118.690909c-2.327273-67.490909-53.527273-118.690909-118.690909-118.690909z m665.6-111.709091c-65.163636 0-118.690909 53.527273-118.690909 118.690909s53.527273 118.690909 118.690909 118.690909 118.690909-53.527273 118.690909-118.690909-53.527273-118.690909-118.690909-118.690909z m-488.727273-325.818182l605.090909-65.163636V60.509091l-598.109091 69.818182h-6.981818v160.581818z" fill="" p-id="2485"></path>
          </svg>
        </router-link>
        <router-link to="/home">
          <svg t="1532578737382" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2066" xmlns:xlink="http://www.w3.org/1999/xlink">

            <path d="M603.97 105.21c22.1-6.37 45.78-6.05 68.1-0.92 25.63 6.09 49.88 17.86 70.75 33.9 7.62 5.79 14.5 12.99 18 22.05 5.42 13.4 3.97 29.42-4.03 41.49-6.98 10.84-18.85 18.39-31.64 20.01-10.22 1.4-20.93-0.77-29.71-6.2-4.95-2.91-8.72-7.4-13.69-10.28-13.33-8.46-28.68-15.12-44.73-14.74-11.3 0.13-21.24 6.75-28.9 14.53-7.17 7.4-10.82 18.31-8.45 28.46 5.51 20.74 10.99 41.48 16.49 62.22 39.54 2.03 79.06 12.49 113.05 33.13 33.04 20.44 62.89 46.36 86.56 77.25 20.09 26.18 35.32 56.08 44.64 87.74 10.09 34.12 13.36 70.1 10.73 105.54-2.19 29.24-7.94 58.31-17.86 85.94-25.65 67.28-73.16 126.27-134.31 164.5-44.85 28.33-96.36 45.42-148.89 51.94-36.26 4.53-73.21 4.55-109.29-1.63-74.14-12.25-143.62-49.2-196.35-102.57-52.4-52.5-88.87-120.64-103.62-193.33-10.88-53.01-10.39-108.36 1.68-161.13 14.75-65.07 47.35-125.94 93.18-174.41 37.38-39.8 83.55-71.29 134.23-91.62 5.22-1.99 10.36-4.35 15.92-5.23 11.87-2.08 24.55 0.73 34.27 7.89 13.16 9.29 20.4 26.14 18.21 42.08-1.81 16.27-13.36 30.94-28.75 36.51-51.2 19.14-96.6 53.34-129.28 97.13-29.21 38.86-48.27 85.28-54.66 133.49-6.45 47.72-0.71 97 16.39 142 24.7 65.79 73.81 122.4 136.42 154.62 37.7 19.53 80.14 29.73 122.59 29.44 34.92-0.45 69.95-6.06 102.77-18.2 28.86-10.72 55.91-26.55 78.91-47.07 21.44-19 39.28-41.96 52.89-67.15 6.82-12.85 13.12-26.08 16.97-40.15 11.36-40.22 13.33-83.81 1.18-124.09-10.05-33.78-30.73-63.89-57.14-87.02-11.68-10.22-24.16-19.59-37.54-27.47-11.82-6.64-24.73-11.16-37.9-14.25 9.18 35.9 19 71.65 28.31 107.52 1.58 8.6 3.16 17.2 4.64 25.82 1.36 37.01-11.62 74.29-35.49 102.6-22.24 26.68-53.82 45.45-87.98 51.9-36.82 7.34-76.41 0.41-108.03-20-30.19-19.14-52.49-49.45-64.25-83-6.66-18.77-9.98-38.62-10.64-58.5-2.02-43.25 9.29-87.44 34.03-123.21 29.07-42.69 74.9-72.04 124.04-86.36-3.62-13.84-7.32-27.66-10.98-41.5-9.49-29.87-7.47-63.41 6.69-91.49 7.64-15.67 19-29.32 32.14-40.67 14.63-12.51 31.71-22.39 50.33-27.51M486.64 430.56c-13.18 13.84-22.42 31.34-26.4 50.02-3.58 16.96-3.6 34.64-0.38 51.65 3.93 18.79 13.63 37.17 29.71 48.26 12.48 8.86 28.73 11.55 43.62 8.64 27.55-4.84 50.03-30.19 50.8-58.24-1.05-6.95-2.2-13.9-4.16-20.66-10.29-38.92-20.67-77.81-30.9-116.75-23.28 7.18-45.44 19.28-62.29 37.08z" fill="" p-id="2067"></path>
          </svg>
        </router-link>
        <router-link to="/video">
          <svg t="1532581032956" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3650" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M723.884246 241.33858h-423.771562c-93.604888 0-169.500439 76.532047-169.500439 170.941254v199.439308c0 94.409207 75.895551 170.941254 169.500439 170.941254h423.771562c93.616144 0 169.501462-76.532047 169.501462-170.941254V412.279834c0-94.409207-75.884294-170.941254-169.501462-170.941254z m120.290667 335.802023c0 86.312808-71.39198 156.307975-159.455665 156.307975H339.268472c-88.054475 0-159.444409-69.995167-159.444409-156.307975V446.857351c0-86.311785 71.389934-156.306952 159.444409-156.306952h345.450776c88.064708 0 159.455665 69.995167 159.455665 156.306952v130.283252z m-418.043094 57.596789l221.437321-122.859165-221.437321-122.858143v245.717308z" fill="" p-id="3651"></path>
          </svg>
        </router-link>
      </div>
      <svg t="1532581076021" class="icon" style="" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4711" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M1017.749333 987.52 720.746667 690.538667c66.24-73.386667 106.965333-170.24 106.965333-276.672 0-228.202667-185.621333-413.866667-413.866667-413.866667C185.664 0 0 185.664 0 413.866667c0 228.224 185.664 413.866667 413.845333 413.866667 106.453333 0 203.306667-40.725333 276.693333-106.965333L987.52 1017.749333C991.701333 1021.909333 997.162667 1024 1002.624 1024c5.482667 0 10.965333-2.090667 15.125333-6.250667C1026.090667 1009.365333 1026.090667 995.882667 1017.749333 987.52zM42.730667 413.866667c0-204.650667 166.485333-371.136 371.114667-371.136 204.650667 0 371.157333 166.485333 371.136 371.136 0 204.629333-166.485333 371.136-371.136 371.136C209.216 785.002667 42.730667 618.496 42.730667 413.866667z" fill="#fff" p-id="4712"></path>
      </svg>
    </div>
    <!--登录框 -->
    <div class="loginFloor_container" :class="{'loginFloor_hide':!loginisShow,'loginFloor_show':loginisShow}">
      <div class="loginFloor">
        <div class="loginFloor_top">
          <div>
            <p>登录网易云音乐</p>
            <p>320K高音质无限下载，手机电脑多端同步</p>
            <mu-button color="primary" :round=true @touchstart="$router.push('/login')">立即登录</mu-button>
          </div>
        </div>
        <div class="loginFloor_content">
          <ul>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-message"></use>
                </svg>
                <span>我的消息</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-huiyuanzhongxin"></use>
                </svg>
                <span>会员中心</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shangcheng"></use>
                </svg>
                <span>商城</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-huodong"></use>
                </svg>
                <span>游戏推荐Beta</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-liuliangchongzhi"></use>
                </svg>
                <span>在线听歌免流量</span>
              </a>
            </li>
          </ul>
        </div>
        <mu-divider></mu-divider>
        <div class="loginFloor_content">
          <ul>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-haoyou"></use>
                </svg>
                <span>我的好友</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fujin"></use>
                </svg>
                <span>附近的人</span>
              </a>
            </li>
          </ul>
        </div>
        <mu-divider></mu-divider>
        <div class="loginFloor_content">
          <ul>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-clothes-copy"></use>
                </svg>
                <span>个性换肤</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tinggeshiqu"></use>
                </svg>
                <span>听歌识曲</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shizhong"></use>
                </svg>
                <span>定时停止播放</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-richscan_icon"></use>
                </svg>
                <span>扫一扫</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-naozhong1-copy"></use>
                </svg>
                <span>音乐闹钟</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-zhinengjiashi"></use>
                </svg>
                <span>驾驶模式</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youhuiquan"></use>
                </svg>
                <span>优惠券</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="loginFloor_content_footer">
          <ul>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yejian"></use>
              </svg>
              <span>夜间模式</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shezhi"></use>
              </svg>
              <span>设置</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuichu"></use>
              </svg>
              <span>退出</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 透明度变小 -->
      <div class="loginFloor_flex" @click="hideLogin" :class="{'loginFlex_hide':!loginisShow}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginisShow: false, //登录层是否显示
      isLeft: false //左滑动画
    };
  },
  methods: {
    //显示
    showLogin() {
      console.log(this.loginisShow, this.isLeft);
      this.loginisShow = !this.loginisShow;
      this.isLeft = false;
    },
    // 隐藏
    hideLogin() {
      // !loginisShow隐藏
      if (this.loginisShow) {
        this.isLeft = true;
      }
      this.loginisShow = !this.loginisShow;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  .header_menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.31rem;
    div {
      width: 50vw;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a {
        display: flex;
        align-items: center;
        svg {
          display: inline-block;
          width: 1.4rem;
          height: 1.4rem;
          fill: #cecccc;
        }
      }
    }
    .icon {
      display: inline-block;
      width: 1.4rem;
      height: 1.4rem;
      fill: #cecccc;
    }
    .active svg {
      fill: #fff !important;
    }
  }

  .loginFloor_hide {
    transition: 0.4s linear;
    transform: translateX(-100%);
  }
  .loginFloor_show {
    transition: 0.4s linear;
    transform: translateX(0%);
  }
  .loginFlex_hide {
    transition: 0.1s linear;
    opacity: 0 !important;
  }
  .loginFloor_container {
    position: absolute;
    display: flex;
    z-index: 98;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
    .loginFloor {
      position: absolute;
      top: 0;
      width: 80vw;
      height: 100%;
      overflow: hidden;
      background: white;
      z-index: 99;
      opacity: 1;
      .loginFloor_top {
        height: 20vh;
        background-image: url("../../assets/img/top_banner.jpg");
        background-size: 100% 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          color: #c8c7c7;
          font-size: 0.75rem;
        }
        p:first-of-type {
          padding-top: 0.63rem;
        }
        button {
          width: 1rem !important;
          margin-top: 0.63rem;
        }
      }
    }
    .loginFloor_flex {
      flex: 1;
      opacity: 0.7;
      background: #646565;
    }
  }
  .loginFloor_container {
    .loginFloor_content {
      padding: 0.63rem 0.94rem;
    }
    li {
      padding: 0.62rem;
      a {
        display: block;
      }
    }
    svg {
      display: inline-block;
      width: 1.4rem;
      height: 1.4rem;
      vertical-align: middle;
    }
    span {
      color: #646565;
      vertical-align: middle;
      margin-left: 0.63rem;
      font-size: 0.88rem;
    }
    .loginFloor_content_footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      z-index: 10;
      height: 2.5rem;
      border-top: 1px solid #656565;
      ul {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}
</style>