<template>
  <div class="footer_container" ref="footer_container">
    <!-- 播放状态栏 -->
    <div class="footer" v-for="(item,index) in currentPlay" :key="index" @touchstart.stop="playDetail(item)">
      <div class="footer_left">
        <img :src="item.album.picUrl" alt="">
        <div>
          <p>{{item.name}}</p>
          <p>
            <span v-for="(art,index) in item.artists" :key="index">
              {{art.name}}</span>
          </p>
        </div>
      </div>
      <div class="footer_right">
        <div v-if="!isPlay" @touchstart.stop="playMusic" class="playMusic comm ">
          <div class="circle" style="background:red">
            <svg class="play_icon" aria-hidden="true">
              <use xlink:href="#icon-bofang1"></use>
            </svg>
            <div class="pie_left">
              <div class="left" ref="left"></div>
            </div>
            <div class="pie_right">
              <div class="right" ref="right"></div>
            </div>
            <div class="mask"></div>
          </div>
        </div>
        <div v-else @touchstart.stop="pauseMusic" class="pasuMusic comm">
          <div class="circle" style="background:red" v-cloak>
            <svg aria-hidden="true" class="play_icon2">
              <use xlink:href="#icon-zanting"></use>
            </svg>
            <div class="pie_left">
              <div class="left" ref="left"></div>
            </div>
            <div class="pie_right">
              <div class="right" ref="right"></div>
            </div>
            <div class="mask"></div>
          </div>
        </div>
        <div class="comm">
          <svg class="icon" aria-hidden="true" @touchstart.stop.prevent="slideUp">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
      <audio class="audio" controls ref="audio">
        <source :src="currentUrl"> 您的浏览器不支持 audio 元素。
      </audio>
    </div>
    <div class="more_musicList_shadow" ref="wrap" @touchmove.prevent>
      <div class="shadow" @touchstart.stop.prevent="slideUp">
      </div>
      <div class="more_musicList">
        <div class="wrap">
          <div class="wrap_left" @touchstart.stop="songTypeFun">
            <svg class="icon" aria-hidden="true" v-if="songType==1">
              <use xlink:href="#icon-liebiaoxunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-if="songType==2">
              <use xlink:href="#icon-icon-test"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-if="songType==3">
              <use xlink:href="#icon-ttsdanquxunhuan-"></use>
            </svg>
            <span style="margin-left:5px;" v-if="songType==1">列表循环</span>
            <span style="margin-left:5px;" v-if="songType==2">随机播放</span>
            <span style="margin-left:5px;" v-if="songType==3">单曲循环</span>
            <span>（{{song.length}}）</span>
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
        <div class="scrollWrap" ref="scrollWrap" v-scrollNo>
          <ul>
            <li class="circle_list" v-for="(item,index) in song" :key="index" @touchend="playCurrent(item, index)">
              <div class="left">
                <svg class="isPlay" aria-hidden="true" v-if="currentPlay[0]&&item.name==currentPlay[0].name">
                  <use xlink:href="#icon-yinliang"></use>
                </svg>
                <span>{{item.name}}-</span>
                <span v-for="(art,index) in item.artists" :key="art.id" v-if="index<2">
                  {{art.name}}
                </span>
              </div>
              <svg class="icon" aria-hidden="true" @touchend.stop="removeItem(index)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      song: [],
      backSong: [],
      currentSong: [],
      songType: 1, //默认为循环
      currentSongUrl: "",
      // isPlayIcon: false,
      duration: 0, //当前播放的总时长
      sdeg: 0, //每秒需要旋转的度数
      halfDuration: 0, //总时长的一半
      currentLeftDeg: 0, //当前左边的度数
      currentRightDeg: 0, //当前右边的度数
      isEnded: false, //当前歌曲是否播放结束
      isSlideShow: false //更多内容是否显示。
    };
  },
  methods: {
    /**
     * 播放详情页
     */
    playDetail(item) {
      // console.log()
      this.$router.push({ name: "currentPlay", params: { song: item } });
      this.$refs.footer_container.style.display = "none";
    },
    playCurrent(item, index) {
      this.$store.commit("putCurrentSong", item);
      this.$store.commit("currentSongIndex", index);
      this.$axios.get("/music/url/?id=" + item.id).then(url => {
        if (url.data.data) {
          url = url.data.data[0].url;
          this.currentSongUrl = url;
        }
        this.$store.commit("CurrentSongUrl", url);
        this.$store.commit("changePlay", true);
        this.play();
      });
    },
    //歌曲播放规则，单曲，循环，随机
    songTypeFun() {
      this.songType < 3 ? this.songType++ : (this.songType = 1);
      this.$store.commit("putsongType", this.songType);
    },
    //上下运动
    slideUp() {
      let wrap = this.$refs.wrap;
      if (this.isSlideShow) {
        wrap.className = "more_musicList_shadow slide_up";
        this.isSlideShow = false;
      } else {
        wrap.className = "more_musicList_shadow  slide_down";
        this.isSlideShow = true;
      }
    },
    // 播放歌曲
    play() {
      this.currentSongUrl = this.currentUrl;
      let audio = document.querySelector("audio");
      // this.isPlayIcon = true;
      audio.load(); //要加载资源
      //切换资源时，还没加载完就直接赋值duration会返回NaN,通过检测是否可以播放来完成。
      let _this = this;
      this.$store.commit("changePlay", true);
      audio.oncanplay = () => {
        this.duration = audio.duration;
        // audio.duration = 5;
        this.sdeg = 360 / this.duration; //每秒需要旋转的度数。
        this.halfDuration = this.duration / 2;
        this.rotateDeg();
      };
      audio.play();
      audio.onended = () => {
        // 当前歌曲播放完毕时,自动播放下一首。播放类型？循环，随机，单曲
        if (audio.ended) {
          let nextIndex = 0;
          switch (this.songType) {
            // 列表循环
            case 1:
              if (this.currentIndex == this.song.length - 1) {
                nextIndex = 0;
              } else if (this.currentIndex != this.song.length - 1) {
                nextIndex = this.currentIndex + 1;
              }
              break;
            // 随机播放
            case 2:
              nextIndex = Math.floor(this.song.length * Math.random());
              break;
            // 单曲循环
            case 3:
              nextIndex = this.currentIndex;
              break;
              return nextIndex;
          }
          this.playCurrent(this.song[nextIndex]);
          this.$store.commit("currentSongIndex", nextIndex);
          // }
        }
      };
    },
    // 暂停歌曲
    pauseMusic() {
      let audio = document.querySelector("audio");
      audio.pause();
      // this.isPlayIcon = false;
      this.$store.commit("changePlay", false);
      this.rotateDeg();
    },
    // 重新播放歌曲
    playMusic() {
      let audio = document.querySelector("audio");
      audio.play();
      // this.isPlayIcon = true;
      this.rotateDeg();
      this.$store.commit("changePlay", true);
    },
    // 获取播放列表
    getSongList() {
      let _this = this;
      this.$axios.post("/recommend/songs").then(data => {
        data = data.data;
        if (data.code === 200) {
          _this.song = data.recommend;
        }
      });
    },
    // 根据播放时长旋转
    rotateDeg() {
      let audio = document.querySelector("audio");
      this.$nextTick(() => {
        setInterval(() => {
          let left = document.querySelector(".circle .left");
          let right = document.querySelector(".circle .right");
          if (audio.currentTime <= this.halfDuration) {
            this.currentRightDeg = Math.ceil(this.sdeg * audio.currentTime);
            if (right) {
              right.style.transform = "rotate(" + this.currentRightDeg + "deg)";
            }
            // 右边旋转
          } else if (
            audio.currentTime <= this.duration &&
            audio.currentTime > this.halfDuration
          ) {
            // 解决切换到下一首时，左边部分仍然显示红色
            if (!audio.ended) {
              this.currentLeftDeg = Math.ceil(
                this.sdeg * (audio.currentTime - this.halfDuration)
              );
              left.style.transform = "rotate(" + this.currentLeftDeg + "deg)";
            } else {
              left.style.transform = "rotate(0deg)";
            }
            // 左边旋转
          }
        }, 0);
      });
    },
    // 清除Index歌曲
    removeItem(index) {
      this.song.splice(index, 1);
    }
  },
  computed: mapState({
    currentPlay: state => state.song.currentPlay,
    currentUrl: state => state.song.currentUrl,
    currentIndex: state => state.song.currentIndex,
    isPlay: state => state.song.isPlay
  }),
  created() {
    this.getSongList();
  },
  watch: {
    //切换歌曲的时候进行播放
    currentUrl(old, New) {
      if (old) {
        this.play();
      }
    }
  },
  mounted() {
    let scroll = new Bscroll(this.$refs.scrollWrap);
  }
};
</script>

<style scoped lang="scss">
.footer_container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 43px;
  z-index: 100;
}
.footer {
  background: white;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  height: 43px;
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
  }
  .pie_right,
  .right {
    clip: rect(0, auto, auto, 17px);
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
  bottom: -100vh;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  .shadow {
    opacity: 0.7;
    height: 40vh;
  }
}
.more_musicList {
  height: 100%;
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
    align-items: center;
    justify-content: space-between;
    padding: 0 0.63rem;
    height: 2.63rem;
    border-bottom: 1px solid #ddd;
    .left {
      display: flex;
      font-size: 12px;
      align-items: center;
      svg {
        margin-right: 0.31rem;
      }
      span:last-of-type {
        color: rgba(130, 130, 130, 0.6);
        font-size: 12px;
        text-overflow: ellipsis;
        // max-width: 10vw;
        max-width: 5rem;
        overflow: hidden;
        white-space: nowrap;
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
.comm {
  height: 100%;
  display: flex;
  align-items: center;
}
.slide_up {
  transform: translateY(0);
  transition: 0.4s ease;
}
.slide_down {
  transform: translateY(-100vh);
  transition: 0.4s ease;
}
.scrollWrap {
  height: 60vh;
  overflow: hidden;
  ul {
    padding-bottom: 2.63rem;
  }
}
.playMusic:active,
.pasuMusic:active {
  background: #ddd;
}
</style>