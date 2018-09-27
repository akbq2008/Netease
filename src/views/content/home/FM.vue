<template>
    <div>
        <div class="container">
            <div class="header fx_sp">
                <div class="left" @touchstart.stop="$router.go(-1)">
                    <svg class="svg cr_wh" aria-hidden="true">
                        <use xlink:href="#icon-fanhui"></use>
                    </svg>
                </div>
                <div class="middle fx_sp">
                    <div class="fm ct cr_wh">
                        <svg class="svg  mr_1" aria-hidden="true">
                            <use xlink:href="#icon-shouyinji01"></use>
                        </svg>
                        <p>私人FM</p>
                    </div>
                    <div class="run ct cr_no">
                        <svg class="svg ml_1 " aria-hidden="true">
                            <use xlink:href="#icon-paobu"></use>
                        </svg>
                        <p>跑步FM</p>
                    </div>
                </div>
                <div class="right cr_wh">
                    <svg class="svg " aria-hidden="true">
                        <use xlink:href="#icon-gengduo-copy-copy-copy"></use>
                    </svg>
                </div>
            </div>
            <div class="content">
                <div class="pic p_up">
                    <img src="http://p2.music.126.net/DsTgTai5LwLu89v64XARzA==/109951162922613259.jpg" alt="">
                </div>
                <p class="cr_wh ct">BELIV</p>
                <p class="cr_no ct mt_1">err</p>
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
            <div class="fx_sa cr_wh p_up">
                <!-- <div class="footer fx_sa"> -->
                <svg class="svg" aria-hidden="true">
                    <use xlink:href="#icon-shanchu"></use>
                </svg>
                <svg class="svg" aria-hidden="true">
                    <use xlink:href="#icon-xihuan1"></use>
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
                    <use xlink:href="#icon-pinglun2-copy"></use>
                </svg>
                <!-- </div> -->
            </div>
        </div>
        <div class="filterBg" :style="{background:'url(http://p2.music.126.net/DsTgTai5LwLu89v64XARzA==/109951162922613259.jpg)'}"></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      time: 0,
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
.container {
  position: relative;
  z-index: 1;
  .middle {
    width: 40vw;
  }
}
.content {
  .pic {
    width: 80vw;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  p:first-of-type {
    margin-top: 2rem;
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
</style>