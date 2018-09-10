<template>
    <div>
        <div class="origin_bg">
            <svg aria-hidden="true" @touchstart="$router.go(-1)">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
            <span>手机号注册</span>
        </div>
        404
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.origin_bg {
  padding-left: 0.5rem;
  svg {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
    color: #fff;
    font-size: 1.13rem;
    margin-left: 0.63rem;
  }
}
</style>