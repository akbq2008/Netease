<template>
    <div class="currentPlay">
        <div class="header  p_up">
            <div class="fx_sp">
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
            </div>
            <div class="shadow"> </div>
        </div>
        <!-- 唱臂 -->
        <img src="@/assets/img/play_needle.png" alt="" class="arm">
        <!-- 唱盘 -->
        <div class="player_container ct">
            <img src="@/assets/img/play_disc.png" alt="">
            <img src="http://p3.music.126.net/ZBZFHnN3rGqmspoqh_tX8Q==/109951163543840203.jpg" alt="">
        </div>
        <!-- 底部 -->
        <div class="footer">
            <div class="header">
                <div class="fx_sa cr_wh">
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-xihuan1"></use>
                    </svg>
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-xiazai1-copy"></use>
                    </svg>
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-pinglun2-copy"></use>
                    </svg>
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-gengduo-copy-copy-copy"></use>
                    </svg>
                </div>
            </div>
            <div class="fx progress_container">
                <div class="wrap fx">
                    <div class="cr_no start">03:07</div>
                    <div class="progressBar">
                        <div class="progress"></div>
                        <div class="btn">
                            <div class="inner"></div>
                        </div>
                    </div>
                    <div class="cr_no end">04:07</div>
                </div>
            </div>
            <div class="fx_sa cr_wh">
                <div class="footer fx_sa">
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-liebiaoxunhuan-copy"></use>
                    </svg>
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-qianjin-copy"></use>
                    </svg>
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-bofang04"></use>
                    </svg>
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-qianjin-copy-copy"></use>
                    </svg>
                    <svg class="svg" aria-hidden="true">
                        <use xlink:href="#icon-gengduo"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="filterBg"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.filterBg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: url("http://p3.music.126.net/ZBZFHnN3rGqmspoqh_tX8Q==/109951163543840203.jpg")
    no-repeat;
  background-size: cover;
  -webkit-filter: blur(120px) brightness(1.1);
  -moz-filter: blur(120px) brightness(1.1);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);
  height: 100vh;
}
.currentPlay {
  .header {
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
    .shadow {
      position: absolute;
      left: 0;
      right: 0;
      top: 50px;
      background: url("http://p3.music.126.net/ZBZFHnN3rGqmspoqh_tX8Q==/109951163543840203.jpg")
        no-repeat;
      background-size: cover;
      -webkit-filter: blur(120px) brightness(1.1);
      -moz-filter: blur(120px) brightness(1.1);
      filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);
      z-index: 15;
      height: 12px;
    }
  }
  .arm {
    position: relative;
    left: 42%;
    top: -12px;
    z-index: 9;
    transform-origin: 33px 43px;
    transform: rotate(-5deg);
  }
  .player_container {
    position: relative;
    top: -6.5rem;
    z-index: 1;
    img {
      width: 100vw;
      transform: scale(0.7, 0.7);
    }
    img:last-of-type {
      transform: scale(0.5, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
    }
  }
  .footer {
    position: relative;
    z-index: 10;
    .header {
      width: 60vw;
      margin: 0 auto;
    }
    .progress_container {
      height: 40px;
      background: rgb(125, 117, 107);
      .progressBar {
        flex: 1;
        background: red;
      }
      .wrap {
        .start,
        .end {
          width: 10vw;
        }
      }
      .progress {
        height: 40px;
        background: rgb(211, 58, 49);
      }
    }
    .footer {
      width: 80vw;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 400px) {
}
</style>