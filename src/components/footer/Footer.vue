<template>
  <div class="footer_container">
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
          <svg class="icon" aria-hidden="true" @touchstart="slideUp">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
      <audio class="audio" controls>
        <source :src="currentSongUrl"> 您的浏览器不支持 audio 元素。
      </audio>
    </div>
    <transition name="fade">
      <div class="more_musicList_shadow" @touchmove.prevent>
        <div class="shadow" @touchstart="isSlideShow=false">
        </div>
        <div class="more_musicList">
          <div class="wrap">
            <div class="wrap_left">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiaoxunhuan"></use>
              </svg>
              <span style="margin-left:5px;">列表循环</span>（
              <span>30</span>）
            </div>
            <div class="wrap_right">
              <div class="wrpa_right_left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shoucangjia"></use>
                </svg>
                <span style="margin-left:5px;">收藏全部</span>
              </div>
              <div class="wrpa_right_right">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shanchu"></use>
                </svg>
              </div>
            </div>
          </div>
          <ul>
            <li class="circle_list" v-for="(item,index) in song" :key="index">
              <div class="left">
                <svg class="isPlay" aria-hidden="true">
                  <use xlink:href="#icon-yinliang"></use>
                </svg>
                <span>{{item.name}}</span>
                <span style="color:rgb(130,130,130,.6)" v-for="art in item.artists" :key="art.id">
                  - {{art.name}}
                </span>
              </div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
export default {
  data() {
    return {
      song: [],
      currentSong: [],
      currentSongUrl: "",
      isPlayIcon: false,
      duration: 0, //当前播放的总时长
      sdeg: 0, //每秒需要旋转的度数
      halfDuration: 0, //总时长的一半
      currentLeftDeg: 0, //当前左边的度数
      currentRightDeg: 0, //当前右边的度数
      isEnded: false, //当前歌曲是否播放结束
      isSlideShow: false //更多内容是否显示。
    };
  },
  watch: {
    currentUrl(oldVal, val) {
      this.play(); //只要监听到值发生了变化，就播放。
    }
  },
  methods: {
    //
    slideUp() {
      this.isSlideShow = true;
    },
    // 播放歌曲
    play() {
      this.currentSongUrl = this.currentUrl;
      let audio = document.querySelector("audio");
      this.isPlayIcon = true;
      audio.load(); //要加载资源
      //切换资源时，还没加载完就直接赋值duration会返回NaN,通过检测是否可以播放来完成。
      audio.oncanplay = () => {
        this.duration = audio.duration;
        // this.duration = 5;
        this.sdeg = 360 / this.duration; //每秒需要旋转的度数。
        this.halfDuration = this.duration / 2;
        let left = document.querySelector(".left");
        let right = document.querySelector(".right");
        setInterval(() => {
          if (audio.currentTime <= this.halfDuration) {
            this.currentRightDeg = Math.floor(this.sdeg * audio.currentTime);
            right.style.transform = "rotate(" + this.currentRightDeg + "deg)";
            // 右边旋转
          } else if (
            audio.currentTime <= this.duration &&
            audio.currentTime > this.halfDuration
          ) {
            this.currentLeftDeg = Math.floor(
              this.sdeg * (audio.currentTime - this.halfDuration)
            );
            left.style.transform = "rotate(" + this.currentLeftDeg + "deg)";
            // 左边旋转
          }
          if (audio.ended) {
            this.$store.commit("nextSong", true);
            console.log(audio.ended);
          }
          // console.log(this.currentRightDeg, this.currentLeftDeg, "or");
        }, 1000);
      };
      audio.play();
    },
    // 暂停歌曲
    pauseMusic() {
      let audio = document.querySelector("audio");
      audio.pause();
      this.isPlayIcon = false;
      this.$nextTick(() => {
        let left = document.querySelector(".playMusic .left");
        let right = document.querySelector(".playMusic .right");
        left.style.transform = "rotate(" + this.currentLeftDeg + "deg)";
        right.style.transform = "rotate(" + this.currentRightDeg + "deg)";
      });
    },
    // 播放歌曲
    playMusic() {
      let audio = document.querySelector("audio");
      audio.play();
      this.isPlayIcon = true;
      this.$nextTick(() => {
        let left = document.querySelector(".pasuMusic .left");
        let right = document.querySelector(".pasuMusic .right");
        left.style.transform = "rotate(" + this.currentLeftDeg + "deg)";
        right.style.transform = "rotate(" + this.currentRightDeg + "deg)";
      });
    },
    getSongList() {
      let _this = this;
      this.$axios.post("/recommend/songs").then(data => {
        data = data.data;
        if (data.code === 200) {
          _this.song = data.recommend;
          console.log(_this.song);
        }
      });
    }
  },
  computed: mapState(["currentPlay", "currentUrl"]),
  created() {
    this.getSongList();
  },
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
    // transition: transform 0.4s ease-in 1s;
    // -webkit-transition: -webkit-transform 0.4s ease-in 1s;
    // -moz-transition: -moz-transform 0.4s ease-in 1s;
  }
  .pie_right,
  .right {
    clip: rect(0, auto, auto, 17px);
    // transition: transform 1s ease-in 0s;
    // -webkit-transition: -webkit-transform 1s ease-in 0s;
    // -moz-transition: -moz-transform 1s ease-in 0s;
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
.more_musicList_shadow {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  transition: botttom 0.5s linear;
  .shadow {
    opacity: 0.7;
    height: 40vh;
  }
}
.more_musicList {
  height: 60vh;
  background: white;
  border-top-left-radius: 0.63rem;
  border-top-right-radius: 0.63rem;
  .wrap {
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 0.63rem;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    svg {
      width: 1rem;
      height: 1rem;
    }
    .wrap_left,
    .wrap_right {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .wrap_left:active,
    .wrpa_right_left:active,
    .wrpa_right_right:active {
      background: #eee;
    }
    .wrpa_right_left,
    .wrpa_right_right {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    .wrpa_right_left {
      padding: 0 0.31rem;
      border-right: 1px solid #ddd;
    }
    .wrpa_right_right {
      padding: 0 0.31rem;
    }
  }
  .circle_list {
    display: flex;
    justify-content: space-between;
    padding: 0.63rem;
    border-bottom: 1px solid #ddd;
    .left {
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.31rem;
      }
    }
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  .circle_list:active {
    background: #eee;
  }
}
// .hide {
//   display: none;
// }
.fade-enter-active,
.fade-leave-active {
  transition: 3s;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
</style>