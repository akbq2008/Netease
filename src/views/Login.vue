<template>
    <div class="login">
        <svg aria-hidden="true">
            <use xlink:href="#icon-logo"></use>
        </svg>
        <p>
            <button class="login_btn origin_bd origin_cr" @touchstart.stop="$router.push('/phoneLogin')">手机号登录</button>
        </p>
        <p>
            <button class="login_btn origin_bd origin_cr">注册</button>
        </p>
        <button class="login_btn origin_bd origin_cr" @touchstart.stop="$router.go(-1)">返回</button>
        <!-- 有默认事件 -->

        <p class="svg_wrap">其他登录方式</p>
        <p>
            <svg aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
            </svg>
            <svg aria-hidden="true">
                <use xlink:href="#icon-qq"></use>
            </svg>
            <svg aria-hidden="true">
                <use xlink:href="#icon-weibo-copy"></use>
            </svg>
            <svg aria-hidden="true">
                <use xlink:href="#icon-wangyi"></use>
            </svg>
        </p>
    </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  background: white;
  text-align: center;
  padding-top: 10vh;
  svg {
    width: 6rem;
    height: 6rem;
    margin-bottom: 10vh;
  }
  button {
    width: 70vw;
    border-radius: 35vw;
    padding: 0.31rem;
    margin: 0.63rem;
    background: white;
    outline: none;
  }
  button:hover {
    background: #ce3d3a;
    color: #fff !important;
  }
  .svg_wrap {
    padding-top: 10vh;
  }
  p svg {
    width: 4rem;
    height: 4rem;
    padding: 0.63rem;
  }
}
</style>