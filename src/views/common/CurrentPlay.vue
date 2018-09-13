<template>
    <div class="currentPlay">
        <div class="header fx_sp p_up">
            <div class="left fx p_line">
                <svg class="svg mr_1" aria-hidden="true" @touchstart="$router.go(-1)">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
                <div>
                    <p class="cr_wh">Nothing To Fear</p>
                    <p class="cr_no">Dex
                        <svg class="svg mr_1" aria-hidden="true">
                            <use xlink:href="#icon-forward"></use>
                        </svg>
                    </p>
                </div>
            </div>
            <div class="right">
                <svg class="svg" aria-hidden="true">
                    <use xlink:href="#icon-heng--shouye_jiaose_yinlejianshang_"></use>
                </svg>
            </div>
            <!-- 唱臂 -->
        </div>
        <div class="arm">
            <img src="@/assets/img/play_needle.png" alt="">
        </div>
        <div class="player_container">
            <!-- <img src="@/assets/img/play_disc.png" alt=""> -->
            <!-- <div class="player"> -->
            <img src="http://p3.music.126.net/ZBZFHnN3rGqmspoqh_tX8Q==/109951163543840203.jpg" alt=""></div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.currentPlay {
  .header {
    background: rgb(25, 24, 20);
    position: relative;
    z-index: 10;
    .left {
      flex: 1;
      .cr_no {
        display: inline-block;
        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }
    .right {
      width: 10vw;
    }
  }
  .arm {
    position: relative;
    left: 42%;
    top: -24px;
    z-index: 9;
    img {
      transform-origin: 33px 43px;
      transform: rotate(-10deg);
    }
  }
  .player_container {
    position: relative;
    top: -4.5rem;
    img {
      width: 100vw;
      transform: scale(0.9, 0.9);
    }
    img {
      width: 80vw;
      border-radius: 50%;
    }
  }
}
</style>