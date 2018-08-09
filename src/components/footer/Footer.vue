<template>
  <div>
    <!-- 播放状态栏 -->
    <div class="footer" v-for="item in currentPlay" :key="item.id">
      <div class="footer_left">
        <img :src="item.album.picUrl" alt="">
        <div>
          <p>{{item.name}}</p>
          <p>
            <span v-for="art in item.artists" :key="art.id">
              {{art.name}}</span>
          </p>
        </div>
      </div>
      <div class="footer_right">
        <div v-if="!isPlayIcon" @touchstart="playMusic" class="playMusic">
          <div class="circle" style="background:red">
            <svg class="play_icon" aria-hidden="true">
              <use xlink:href="#icon-bofang1"></use>
            </svg>
            <div class="pie_left">
              <div class="left"></div>
            </div>
            <div class="pie_right">
              <div class="right"></div>
            </div>
            <div class="mask"></div>
          </div>
        </div>
        <div v-else @touchstart="pauseMusic" class="pasuMusic">
          <div class="circle" style="background:red">
            <svg aria-hidden="true" class="play_icon2">
              <use xlink:href="#icon-zanting"></use>
            </svg>
            <div class="pie_left">
              <div class="left"></div>
            </div>
            <div class="pie_right">
              <div class="right"></div>
            </div>
            <div class="mask"></div>
          </div>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
      <audio class="audio" controls>
        <source :src="currentSongUrl"> 您的浏览器不支持 audio 元素。
      </audio>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentSong: [],
      currentSongUrl: "",
      isPlayIcon: false
    };
  },
  watch: {
    currentUrl(oldVal, val) {
      this.play(); //只要监听到值发生了变化，就播放。
    }
  },
  methods: {
    // 播放歌曲
    play() {
      this.currentSongUrl = this.currentUrl;
      let audio = document.querySelector("audio");
      this.isPlayIcon = true;
      audio.load(); //要加载资源
      audio.play();
    },
    // 暂停歌曲
    pauseMusic() {
      let audio = document.querySelector("audio");
      audio.pause();
      this.isPlayIcon = false;
    },
    // 播放歌曲
    playMusic() {
      let audio = document.querySelector("audio");
      audio.play();
      this.isPlayIcon = true;
    }
  },
  computed: mapState(["currentPlay", "currentUrl"]),
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2.75rem;
  z-index: 100;
  background: white;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  .footer_left {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    img {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      margin: 0.31rem;
    }
  }
  .footer_right {
    width: 6.25rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    .play_icon {
      position: absolute;
      width: 14px;
      height: 14px;
      left: 50%;
      margin-left: -5px;
      top: 50%;
      margin-top: -7px;
      z-index: 10;
    }
    .play_icon2 {
      position: absolute;
      width: 14px;
      height: 14px;
      left: 50%;
      margin-left: -7px;
      top: 50%;
      margin-top: -7px;
      z-index: 10;
    }
  }
  .audio {
    display: none;
  }
  .circle {
    width: 34px;
    height: 34px;
    position: relative;
    border-radius: 50%;
  }

  .pie_left,
  .left {
    clip: rect(0, 17px, auto, 0);
    transition: transform 0.4s ease-in 1s;
    -webkit-transition: -webkit-transform 0.4s ease-in 1s;
    -moz-transition: -moz-transform 0.4s ease-in 1s;
  }
  .pie_right,
  .right {
    clip: rect(0, auto, auto, 17px);
    transition: transform 1s ease-in 0s;
    -webkit-transition: -webkit-transform 1s ease-in 0s;
    -moz-transition: -moz-transform 1s ease-in 0s;
  }

  .pie_left,
  .pie_right {
    width: 34px;
    height: 34px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .left,
  .right {
    width: 34px;
    height: 34px;
    background: black;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  // .left {
  //   transform: rotate(0deg);
  // }
  // .right {
  //   transform: rotate(20deg);
  // }
  .mask {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    left: 2px;
    top: 2px;
    background: #fff;
    position: absolute;
  }
}
</style>