<template>
    <div class="local">
        <ul>
            <li>
                <svg class="svg m_line" aria-hidden="true">
                    <use xlink:href="#icon-yinyuered"></use>
                </svg>
                <span>本地音乐</span>
                <span>(137)</span>
            </li>
            <li>
                <svg class="svg m_line" aria-hidden="true">
                    <use xlink:href="#icon-yinyuered"></use>
                </svg>
                <span>最近播放</span>
                <span>(38)</span>
            </li>
            <li>
                <svg class="svg m_line" aria-hidden="true">
                    <use xlink:href="#icon-xiazai1"></use>
                </svg>
                <span>下载管理</span>
                <span>(137)</span>
            </li>
            <li>
                <svg class="svg m_line" aria-hidden="true">
                    <use xlink:href="#icon-diantai"></use>
                </svg>
                <span>我的电台</span>
                <span>(0)</span>
            </li>
            <li>
                <svg class="svg m_line" aria-hidden="true">
                    <use xlink:href="#icon-diantai"></use>
                </svg>
                <span>我的收藏</span>
                <span>(专辑/歌手/视频/专栏)</span>
            </li>
        </ul>
        <!--  -->
        <!-- 创建的歌单 -->
        <div class="createSong" @touchstart="isShowSong=!isShowSong">
            <div class="left">
                <svg class="svg m_line" :class="{'rotate_up':isShowSong,'rotate_down':!isShowSong}" aria-hidden="true">
                    <use xlink:href="#icon-down-trangle-copy"></use>
                </svg>
                <span>创建的歌单</span>
                <span>(1)</span>
            </div>
            <div class="right">
                <svg class="svg m_line" aria-hidden="true">
                    <use xlink:href="#icon-shezhi"></use>
                </svg>
            </div>
        </div>
        <div class="songList" :class="{'hide':!isShowSong}">
            <div class="fx p_up">
                <div class="left">
                    <svg class="svg m_line" aria-hidden="true">
                        <use xlink:href="#icon-xihuan"></use>
                    </svg>
                </div>
                <div class="right fx_sp">
                    <div>
                        <span>我喜欢的歌曲</span>
                        <p>0首</p>
                    </div>
                    <svg class="svg m_line" aria-hidden="true">
                        <use xlink:href="#icon-gengduo-copy-copy"></use>
                    </svg>
                </div>
            </div>
            <div class="line"></div>
        </div>
        <h2 class="p_up ct">推荐歌单</h2>
        <div class="remmend">
            <!-- {{recommendList}} -->
            <div>
                <img src="http://p3.music.126.net/0CeZHnDemJN-dhW0YtC1SQ==/109951163446399208.jpg" alt="">
                <p>云音乐热歌榜</p>
            </div>
            <div>
                <img src="http://p3.music.126.net/0CeZHnDemJN-dhW0YtC1SQ==/109951163446399208.jpg" alt="">
                <p>朗诵超级适合的背景音乐</p>
            </div>
            <div>
                <img src="http://p3.music.126.net/0CeZHnDemJN-dhW0YtC1SQ==/109951163446399208.jpg" alt="">
                <p>例子搭嘎单方事故梵蒂冈</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isShowSong: false
      //   recommendList: [] //推荐歌单
    };
  },
  computed: {
    ...mapState({ songList: state => state.song.songList })
    // recommendList() {
    //   console.log(this.$store.getters.recommendList);
    //   return this.$store.getters.recommendList;
    // }
    // recommendList() {
    //   //   this.recommendList,.mm
    //   console.log(this.songList);
    //   return this.songList;
    // }
  },
  mounted() {
    // this.recommendList.push(this.songList[6]);
    // this.recommendList.push(this.songList[7]);
    // console.log(this.recommendList);
  }
};
</script>

<style scoped lang="scss">
span,
svg {
  vertical-align: middle;
}
.hide {
  display: none !important;
}
.local {
  padding-top: 4vh;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
  li {
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #ddd;
  }
  li:active {
    background: rgb(224, 224, 224);
  }

  .createSong {
    padding: 0.1rem 0;
    display: flex;
    justify-content: space-between;
    background: #ddd;
  }
  .songList {
    .left {
      width: 20vw;
      svg {
        width: 10vw;
        height: 10vw;
      }
    }
    .right {
      flex: 1;
    }
  }
  .rotate_up {
    transform: rotate(90deg);
    transition: 0.5s ease;
  }
  .rotate_down {
    transform: rotate(0deg);
    transition: 0.5s ease;
  }
  h2 {
    margin-top: 10vh;
  }
  .remmend {
    display: flex;
    justify-content: space-around;
    div {
      flex: 1;
      padding: 3px;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>