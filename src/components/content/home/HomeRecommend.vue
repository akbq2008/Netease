<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <a href="">
          <img :src="slide.picUrl" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="recommend_button">
      <ul>
        <li>
          <a href="#" class="origin_bg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-local_fm"></use>
            </svg>
          </a>
          <p>私人FM</p>
        </li>
        <li>
          <a href="#" class="origin_bg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-calander"></use>
            </svg>
          </a>
          <p>每日推荐</p>
        </li>
        <li>
          <a href="#" class="origin_bg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-songList"></use>
            </svg>
          </a>
          <p>歌单</p>
        </li>
        <li>
          <a href="#" class="origin_bg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rank"></use>
            </svg>
          </a>
          <p>排行榜</p>
        </li>
      </ul>
    </div>
    <div class="recomment_songList">
      <div>
        <span>推荐歌单</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-forward"></use>
        </svg>
      </div>
      <!-- 歌单 -->
      <div class="songlist_containeer">
        <a v-for="(item,index) in songList" @touchstart="currentSong(item)" :key="index" v-if="index<6">
          <div class="song_detail">
            <img :src="item.picUrl" alt="">
            <div class="song_count">
              <svg aria-hidden="true">
                <use xlink:href="#icon-headset"></use>
              </svg>
              <span>{{(item.playCount/10000).toFixed(0)}}万</span>
            </div>
          </div>
          <p>{{item.name}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperSlides: [], //初始化数据
      songList: [], //推荐歌单
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay
          loop: true //能够自动切换
        },
        updateOnImagesReady: true,
        preloadImages: true
      }
    };
  },
  methods: {
    currentSong(item) {
      this.$store.commit("currentSong", item);
      this.$router.push("/play?id=" + item.id);
    },
    //   banner数据初始化
    init() {
      this.$axios.get("/banner").then(data => {
        if (data.data.code === 200) {
          this.swiperSlides = data.data.banners;
        }
      });
    },
    //获取歌单
    getSongList() {
      this.$axios.get("/personalized").then(data => {
        data = data.data;
        if (data.code === 200) {
          this.songList = data.result;
          this.$store.commit("pustSongList", this.songList);
          console.log(this.songList);
        }
      });
    },
    //获取动态消息
    initEvent() {
      this.$axios
        .get("/event", { xhrFields: { withCredentials: true } })
        .then(data => {
          data = data.data;
          // console.log(data);
        });
    }
  },
  mounted() {},
  created() {
    this.init(); //   banner数据初始化
    this.initEvent(); //获取动态消息
    this.getSongList(); //获取歌单
  }
};
</script>
<style scoped lang="scss">
// 默认的为relative
.recommend {
  .swiper-container {
    width: 96vw;
    height: 23vh;
    a {
      display: block;
      height: 100%;
      img {
        display: inline-block;
        width: 100vw;
        height: 100%;
      }
    }
  }
  .recommend_button {
    ul {
      padding: 0.63rem 0;
      display: flex;
      justify-content: space-around;
      list-style: none;
      border-bottom: 1px solid #ededed;
      li {
        flex: 1;
        text-align: center;
        a {
          display: flex;
          width: 3rem;
          height: 3rem;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
          border-radius: 1.5rem;
          svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
  .recomment_songList {
    padding: 0.63rem 0.31rem;
    svg {
      width: 1.3rem;
      height: 1.3rem;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      font-weight: 600;
    }
  }
  .songlist_containeer {
    margin-top: 0.62rem;
    a {
      display: inline-block;
      width: 33.3%;
      padding: 0.13rem 0.13rem 0.63rem 0.13rem;
      box-sizing: border-box;
      color: black;
      vertical-align: top;
      .song_detail {
        position: relative;
        img {
          display: inline-block;
          border-radius: 0.31rem;
          width: 100%;
        }
        .song_count {
          position: absolute;
          top: 0.31rem;
          right: 0.31rem;
          svg {
            width: 0.75rem;
            height: 0.75rem;
          }
          span {
            color: #e6e6e6;
          }
        }
      }
      p {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>