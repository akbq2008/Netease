<template>
    <div class="local">
        <ul>
            <li>
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-yinyuered"></use>
                </svg>
                <span>本地音乐</span>
                <span>(137)</span>
            </li>
            <li>
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-yinyuered"></use>
                </svg>
                <span>最近播放</span>
                <span>(38)</span>
            </li>
            <li>
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-xiazai1"></use>
                </svg>
                <span>下载管理</span>
                <span>(137)</span>
            </li>
            <li>
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-diantai"></use>
                </svg>
                <span>我的电台</span>
                <span>(0)</span>
            </li>
            <li>
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-diantai"></use>
                </svg>
                <span>我的收藏</span>
                <span>(专辑/歌手/视频/专栏)</span>
            </li>
        </ul>
        <!--  -->
        <!-- 创建的歌单 -->
        <div class="createSong">
            <div class="left">
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-down-trangle-copy"></use>
                </svg>
                <span>创建的歌单</span>
                <span>(1)</span>
            </div>
            <div class="right">
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-shezhi"></use>
                </svg>
            </div>
        </div>
        <div class="songList" :class="{'hide':!isShowSong}">
            <div class="left">
                <svg class="svg p_line" aria-hidden="true">
                    <use xlink:href="#icon-xihuan"></use>
                </svg>
            </div>
            <div class="right">
                <p>
                    <span>我喜欢的歌曲</span>
                    <svg class="svg p_line" aria-hidden="true">
                        <use xlink:href="#icon-gengduo-copy-copy"></use>
                    </svg>
                </p>
                <p>0首</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShowSong: false
    };
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
  .p_line {
    margin: 0 0.5rem;
  }
  .createSong {
    padding: 0.1rem 0;
    display: flex;
    justify-content: space-between;
    background: #ddd;
  }
  .songList {
    display: flex;
    align-items: center;
    padding: 0.3rem 0;
    .left {
      width: 20vw;
      svg {
        width: 10vw;
        height: 10vw;
      }
    }
    .right {
      flex: 1;
      p {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>