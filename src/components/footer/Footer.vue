<template>
    <div>
        <!-- 播放状态栏 -->
        <div class="footer" v-for="item in song" :key="item.id">
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
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduo"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentSong: []
    };
  },
  computed: {
    song() {
      console.log(this.$store.state.currentPlay);
      return this.$store.state.currentPlay;
    }
  }
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
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>