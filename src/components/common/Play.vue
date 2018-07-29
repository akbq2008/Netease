<template>
    <div class="play_container">
        <!-- 歌单头部 -->
        <div class="play_header origin_bg">
            <svg class="icon" aria-hidden="true" @touchstart="$router.go(-1)">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
            <a href="#">
                <p>歌单</p>
                <p>推荐</p>
            </a>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gengduo-copy"></use>
            </svg>
        </div>
        <!-- 内容 -->
        <div class="play_content">
            <div class="play_content_header">
                <div class="img_wrap">
                    <img src="http://p1.music.126.net/AQqnFZkw6iLHgD5Ez-xhjw==/18693896697673323.jpg" alt="">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-headset"></use>
                        </svg>
                        <span>wan</span>
                    </div>
                </div>
                <div class="right_content">
                    <p>失落少年失落少年失落少年失落少年</p>
                    <div>
                        <img src="http://p1.music.126.net/AQqnFZkw6iLHgD5Ez-xhjw==/18693896697673323.jpg" alt="" class="logo">
                        <span>空气</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-forward"></use>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from "../footer/Footer";
export default {
  components: {
    "app-footer": Footer
  }
};
</script>

<style scoped lang="scss">
.play_container {
  .play_header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    svg {
      flex: 1;
      width: 1.5rem;
      height: 1.5rem;
    }
    a {
      flex: 3;
      color: #fff;
      p:first-of-type {
        font-size: 1rem;
      }
    }
  }
  .play_content {
    .play_content_header {
      display: flex;
      justify-content: space-between;
      background: grey;
      padding: 3.81rem 0.63rem 0.63rem 0.63rem;
      .img_wrap {
        position: relative;
        width: 12.5rem;
        height: 12.5rem;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        span {
          color: red;
        }
        div {
          position: absolute;
          right: 0.31rem;
          top: 0.31rem;
          svg {
            width: 1rem;
            height: 1rem;
          }
          span {
            color: #c5c5c5;
          }
        }
      }
      .right_content {
        padding: 0.63rem;
        flex: 1;
        p {
          font-size: 1rem;
          color: #fff;
          max-width: 11.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-bottom: 1.88rem;
        }
        div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          img {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
          }
          span {
            max-width: 6.25rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          svg {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
  }
}
</style>