<template>
  <div class="play_container">
    <!-- 歌单头部 -->
    <div class="play_header origin_bg">
      <svg class="icon" aria-hidden="true" @click.stop="$router.go(-1)">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <div>
        <p>歌单</p>
        <p v-if="currentSong[0]">{{currentSong[0].copywriter}}</p>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo-copy"></use>
      </svg>
    </div>
    <!-- 内容 -->
    <div class="play_content">
      <!--  -->
      <div class="play_content_header">
        <div class="img_wrap song_detail">
          <img v-if="currentSong[0]" :src="currentSong[0].picUrl" alt="">
          <div class="song_count">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-headset"></use>
            </svg>
            <span v-if="currentSong[0]">{{currentSong[0].playcount}}</span>
          </div>
        </div>
        <div class="right_content">
          <p v-if="currentSong[0]">{{currentSong[0].name}}</p>
          <div>
            <img src="http://p1.music.126.net/AQqnFZkw6iLHgD5Ez-xhjw==/18693896697673323.jpg" alt="" class="logo">
            <span>空气</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-forward"></use>
            </svg>
          </div>
        </div>
      </div>
      <!--  -->
      <!-- 功能 -->
      <div class="features_container">
        <div class="features">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun2"></use>
          </svg>
          <p>112</p>
        </div>
        <div class="features">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-heng--shouye_jiaose_yinlejianshang_"></use>
          </svg>
          <p>112</p>
        </div>
        <div class="features">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai"></use>
          </svg>
          <p>112</p>
        </div>
        <div class="features">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-duoxuan"></use>
          </svg>
          <p>112</p>
        </div>
      </div>
      <!-- 功能 -->
      <div class="play_container">
        <div class="play_list">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <p>
            <span>播放全部</span>
            <span>(共30首)</span>
          </p>
        </div>
        <div class="playCollection origin_bg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-plus"></use>
          </svg>
          <span>收藏</span>
          <span>(30)</span>
        </div>
      </div>
      <!-- 功能 -->
      <!-- 歌单列表 -->
      <div class="songList">
        <div class="songList_left">
          <span>1</span>
          <div>
            <p>吻别</p>
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sq"></use>
              </svg>
              <span>张学友</span>
            </p>
          </div>
        </div>
        <div class="songList_right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-video-copy"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy-copy"></use>
          </svg>
        </div>
      </div>

      <!-- 歌单列表 -->
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "../footer/Footer";
export default {
  data() {
    return {
      currentSong: []
    };
  },
  methods: {
    //数据初始化
    getSongList() {
      this.$axios.get("/personalized").then(data => {
        data = data.data;
        if (data.code === 200) {
          let songList = data.result;
          let back = songList.filter(item => {
            return item.id == this.$route.query.id;
          });
          this.currentSong = back;
        }
      });
    }
  },
  mounted() {
    this.getSongList();
    // console.log(this.currentSong);
    // console.log(this.$route);
  },
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
    div {
      flex: 3;
      color: #fff;
      p:first-of-type {
        font-size: 1rem;
      }
      p:last-of-type {
        text-overflow: ellipsis;
        max-width: 11.75rem;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  .play_content {
    .play_content_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: grey;
      padding: 3.81rem 0.63rem 0.65rem 0.63rem;
      border: 1px solid grey;
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
          padding-bottom: 2.88rem;
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
  .features_container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.63rem 0;
    background: grey;
    .features {
      flex: 1;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    p {
      color: #ddd;
    }
  }
  .play_container {
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background: grey;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      vertical-align: middle;
    }
    div {
      padding: 0.63rem 0;
    }
    span {
      font-size: 1rem;
      vertical-align: middle;
    }
    .play_list {
      flex: 1;
      display: flex;
      justify-content: space-around;
      border-top-left-radius: 0.62rem;
      background: white;
    }
    .playCollection {
      width: 40vw;
      span {
        color: #fff;
      }
    }
    p span:last-of-type {
      color: #ddd;
    }
  }
  .songList {
    display: flex;
    border-bottom: 1px solid #ddd;
    align-items: center;
    .songList_left {
      flex: 1;
      display: flex;
      text-align: center;
      align-items: center;
      svg {
        width: 1rem;
        height: 1rem;
        vertical-align: middle;
      }
      span {
        width: 10vw;
        vertical-align: middle;
      }
      p {
        text-align: left;
      }
    }
    .songList_right {
      width: 15vw;
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>