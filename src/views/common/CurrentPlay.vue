<template>
  <div class="currentPlay">
    <div class="header_container  p_up">
      <div class="fx_sp">
        <div class="left  p_line">
          <svg class="svg mr_1" aria-hidden="true" @touchstart.stop.prevent="turnBack">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
          <div v-for="(item,index) in currentPlay" :key="index">
            <p class="cr_wh">{{item.name}}</p>
            <p class="cr_no" v-for="(art,index) in item.artists" :key="index">{{art.name}}
              <svg class="svg mr_1" aria-hidden="true">
                <use xlink:href="#icon-forward"></use>
              </svg>
            </p>
          </div>
        </div>
        <div class="right">
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-heng--shouye_jiaose_yinlejianshang_"></use>
          </svg>
        </div>
      </div>
      <!-- <div class="shadow"> </div> -->
    </div>
    <!-- 唱臂 -->
    <img src="@/assets/img/play_needle.png" alt="" class="arm">
    <!-- 唱盘 -->
    <div class="player_container ct">
      <img src="@/assets/img/play_disc.png" alt="">
      <img v-if="currentPlay[0].album" :src="currentPlay[0].album.picUrl" alt="">
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="header">
        <div class="fx_sa cr_wh">
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-xihuan1"></use>
          </svg>
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-xiazai1-copy"></use>
          </svg>
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-pinglun2-copy"></use>
          </svg>
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy-copy-copy"></use>
          </svg>
        </div>
      </div>
      <div class="fx_sa progress_container">
        <span class='mr_1'>{{time|timeFormatter}}</span>
        <div class="progress" @touchstart="clickPlay" @touchmove="clickPlay">
          <div class="currentTime" :style="{width:currentTime+'vw'}"></div>
          <div class="btn fx playButton" ref="playButton">
            <div class="inner"></div>
          </div>
        </div>
        <span class='ml_1'>{{totalTime|timeFormatter}}</span>
      </div>
      <div class="fx_sa cr_wh">
        <div class="footer fx_sa">
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-liebiaoxunhuan-copy"></use>
          </svg>
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-qianjin-copy"></use>
          </svg>
          <svg class="svg" aria-hidden="true" @touchstart.stop="playMusic" v-if="!isPlay">
            <use xlink:href="#icon-bofang04"></use>
          </svg>
          <svg class="svg" aria-hidden="true" @touchstart.stop="pauseMusic" v-else>
            <use xlink:href="#icon-zanting1"></use>
          </svg>
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-qianjin-copy-copy"></use>
          </svg>
          <svg class="svg" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="filterBg" :style="{background:'url('+currentPlay[0].album.picUrl+')'}"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      time: 0,
      currentTime: 0,
      totalTime: 0
    };
  },
  computed: {
    ...mapState({
      currentPlay: state => state.song.currentPlay,
      isPlay: state => state.song.isPlay
    })
  },
  methods: {
    /**
     * 暂停歌曲
     */
    pauseMusic() {
      let audio = document.querySelector("audio");
      audio.pause();
      this.$store.commit("changePlay", false);
    },
    /**
     * 播放歌曲
     */
    playMusic() {
      let audio = document.querySelector("audio");
      audio.play();
      this.$store.commit("changePlay", true);
    },
    /**
     * 返回上一层
     */
    turnBack() {
      this.$router.go(-1);
      let footer_container = document.querySelector(".footer_container");
      footer_container.style.display = "block";
    },
    /**
     * 点击播放,滑动播放
     */
    clickPlay(e) {
      let currentTime = document.querySelector(".progress");
      let audio = document.querySelector("audio");
      let playButton = document.querySelector(".playButton");
      let cX =
        (parseInt(e.touches[0].clientX) - parseInt(currentTime.offsetLeft)) /
        (0.75 * parseInt(window.innerWidth)); //当前的进度转换百分比，（当前点击位置-进度层距离左边视口的距离）/(0.8*视口的宽度)
      audio.currentTime = cX * audio.duration; //当前播放时间
    }
  },
  mounted() {
    this.$nextTick(() => {
      let audio = document.querySelector("audio");
      let playButton = document.querySelector(".playButton");
      let progress = document.querySelector(".progress");
      this.totalTime = audio.duration;
      setInterval(() => {
        // 进度层变化
        if (audio.oncanplay) {
          this.time = audio.currentTime; //当前时间
          this.currentTime = audio.currentTime / audio.duration * 75; //进度条红色层
          playButton.style.left =
            progress.offsetWidth * audio.currentTime / audio.duration -
            8 +
            "px"; //进度条按钮层
        }
        // 结束的时候重新赋值
        if (audio.onended) {
          this.totalTime = audio.duration;
        }
      }, 1000);
    });
  }
};
</script>

<style scoped lang="scss">
.filterBg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-size: cover;
  -webkit-filter: blur(120px) brightness(0.7);
  -moz-filter: blur(120px) brightness(0.7);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);
  height: 100vh;
}
.currentPlay {
  .header_container {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
    .left {
      flex: 1;
      display: flex;
      .cr_no {
        display: inline-block;
        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }
    .right {
      width: 10vw;
    }
    .shadow {
      position: absolute;
      left: 0;
      right: 0;
      top: 50px;
      background: url("http://p3.music.126.net/ZBZFHnN3rGqmspoqh_tX8Q==/109951163543840203.jpg")
        no-repeat;
      background-size: cover;
      -webkit-filter: blur(120px) brightness(1.1);
      -moz-filter: blur(120px) brightness(1.1);
      filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);
      z-index: 15;
      height: 12px;
    }
  }
  .arm {
    position: relative;
    left: 42%;
    top: -12px;
    z-index: 9;
    transform-origin: 33px 43px;
    transform: rotate(-5deg);
  }
  .player_container {
    position: relative;
    top: -6.5rem;
    z-index: 1;
    img {
      width: 100vw;
      transform: scale(0.7, 0.7);
    }
    img:last-of-type {
      transform: scale(0.5, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
    }
  }
  .footer {
    position: relative;
    z-index: 10;
    .header {
      width: 60vw;
      margin: 0 auto;
    }

    .footer {
      width: 80vw;
      margin: 0 auto;
    }
  }
  .progress_container {
    justify-content: center;
    .progress {
      position: relative;
      width: 75vw;
      height: 5px;
      background: #ddd;
    }
    .currentTime {
      height: 5px;
      background: red;
    }
    .btn {
      position: absolute;
      top: -5px;
      left: -4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff;
      justify-content: center;
      .inner {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: red;
      }
    }
  }
}

@media screen and (max-width: 400px) {
}
</style>