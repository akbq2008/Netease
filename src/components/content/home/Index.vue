<template>
    <div>
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
.recommend_header {
  position: relative;
  height: 3rem;
  display: flex;
  padding-top: 1rem;
  justify-content: space-around;
  text-align: center;
  a {
    flex: 1;
    color: #bdbdbd;
  }
  .active {
    color: #fff;
    span {
      padding-bottom: 3px;
      border-bottom: 2px solid #fff;
    }
  }
}
</style>