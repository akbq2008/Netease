<template>
    <div class="index">
        <div class="recommend_header origin_bg">
            <router-link to="/home/recommend/recommendContent">
                <span>推荐</span>
            </router-link>
            <router-link to="/home/friend/friendContent">
                <span>朋友</span>
            </router-link>
            <router-link to="/home/anchorStation/anchorStationContent">
                <span>电台</span>
            </router-link>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.index {
  margin-top: 8vh;
  .recommend_header {
    position: fixed;
    top: 4vh;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    text-align: center;
    a {
      flex: 1;
      color: #bdbdbd;
      height: 4vh;
      line-height: 4vh;
    }
    .active {
      color: #fff;
      span {
        padding-bottom: 3px;
        border-bottom: 2px solid #fff;
      }
    }
  }
}
</style>