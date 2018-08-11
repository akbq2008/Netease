`<template>
  <div class="play_container">
    <!-- 歌单头部 -->
    <div class="play_header origin_bg">
      <svg class="icon" aria-hidden="true" @click.stop="$router.go(-1)">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <div>
        <p>歌单</p>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wenti"></use>
      </svg>
    </div>
    <!-- 内容 -->
    <div class="play_content">
      <!--  -->
      <div class="play_content_header">

      </div>
      <!--  -->
      <!-- 功能 -->
      <!-- 功能 -->
      <div class="play_container_wrap">
        <div class="play_list">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <p>
            <span>播放全部</span>
          </p>
        </div>
        <div class="playCollection ">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
          <span>多选</span>
        </div>
      </div>
      <!-- 功能 -->
      <!-- 歌单列表 -->
      <div class="songList" v-for="(item,index) in song" :key="index" @touchstart="playCurrent(item,index)">
        <div class="songList_left">
          <img :src="item.album.picUrl" v-if="!item.isPlay" />
          <svg class="isPlay" aria-hidden="true" v-else>
            <use xlink:href="#icon-yinliang"></use>
          </svg>
          <div>
            <p>
              <span>{{item.name}}</span>
              <span v-for="ali in item.alias" :key="ali.id" v-if="item.alias">
                ({{ali}})
              </span>
            </p>
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sq"></use>
              </svg>
              <span v-for="art in item.artists" :key="art.id">
                {{art.name}}-{{item.album.name}}
              </span>
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
import Footer from "../../footer/Footer";
export default {
  data() {
    return {
      song: [],
      currentItem: {},
      currentSongUrl: ""
    };
  },
  watch: {
    // currentItem(oldVal, val) {
    //   this.$set(oldVal, "isPlay", false);
    //   this.$set(val, "isPlay", true);
    // },
    // immediate: true,
    // deep: true
  },
  methods: {
    // 播放当前歌曲
    playCurrent(item, index) {
      this.currentItem = item;
      this.songPlay();
      this.$store.commit("putCurrentSong", this.currentItem);
      this.getSongUrl(this.currentItem);
    },
    songPlay() {
      this.song.forEach(song => {
        song.id === this.currentItem.id
          ? this.$set(song, "isPlay", true)
          : this.$set(song, "isPlay", false);
      });
    },
    getSongUrl(song) {
      this.$axios.get("/music/url/?id=" + song.id).then(url => {
        console.log(url.data);
        if (url.data.data) {
          url = url.data.data[0].url;
          this.currentSongUrl = url;
        }
        this.$store.commit("CurrentSongUrl", url);
      });
    },
    // 获取歌曲
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
  created() {
    this.getSongList();
  },
  mounted() {
    // console.log(this.$route);
    // this.songPlay();
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
  .play_container_wrap {
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background: white;
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
      justify-content: flex-start;
      svg {
        margin: 0 0.63rem;
      }
    }
    .playCollection {
      width: 40vw;
      background: white;
      text-align: right;
      padding-right: 0.63rem;
      span {
        color: black;
      }
    }
    p span:last-of-type {
      color: black;
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
      img,
      .isPlay {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin: 0.31rem;
        border-radius: 0.19rem;
      }
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
        max-width: calc(80vw - 2.31rem);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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