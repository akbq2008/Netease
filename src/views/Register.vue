<template>
    <div class="register">
        <div class="origin_bg">
            <svg aria-hidden="true" @touchstart="$router.go(-1)">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
            <span>手机号注册</span>
        </div>
        <p class="form">
            <span ref="phone">+86</span>
            <input type="text" v-model="form.phoneNum" placeholder="请输入手机号" @keyup="focusColor" autofocus ref="phoneNum" maxlength="11" @keypress="filterInput">
            <svg aria-hidden="true" class="clear_input" v-show="form.phoneNum" @touchstart="clearInput">
                <use xlink:href="#icon-guanbi"></use>
            </svg>
        </p>
        <p class="formInput">
            <input type="password" v-model="form.pwd" placeholder="设置登录密码，不少于6位"></p>
        <p>
            <button class="origin_bg" @touchstart="register">下一步</button>
        </p>
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
  data() {
    return {
      form: {
        phoneNum: "",
        pwd: ""
      },
      mes: ""
    };
  },
  methods: {
    async register() {
      if (!this.form.phoneNum) {
        this.Toast("请输入手机号");
        return;
      }
      if (!this.form.pwd) {
        this.Toast("密码不能为空！");
      }
      if (this.form.phoneNum.length < 11) {
        this.Toast("请输入11位的手机号码！");
        return;
      }
      const loading = this.$loading({
        // ...options
      });
      // this.form.phoneNum = "17681863293";
      // this.form.pwd = "a123456";
      let formData = {
        phone: this.form.phoneNum,
        password: this.form.pwd
      };
      await this.$store
        .dispatch("LoginByPhone", formData)
        .then(() => {
          loading.close();
          this.$router.push("/home/recommend/recommendContent");
        })
        .catch(err => console.log(err));
    },
    filterInput() {
      this.form.phoneNum = this.form.phoneNum.replace(/[^0-9]$/g, "");
    },
    //聚焦改变颜色,过滤
    focusColor() {
      this.form.phoneNum = this.form.phoneNum.replace(/[^0-9]$/g, "");
      this.$refs.phone.style.cssText = "color:black";
      //失焦改变颜色
      if (!this.form.phoneNum) {
        this.$refs.phone.style.cssText = "color:#a7a6a6;";
      }
    },
    // 清空输入框
    clearInput() {
      if (this.form.phoneNum) {
        this.form.phoneNum = "";
      }
    }
  },
  mounted() {
    window.onload = () => {
      this.$refs.phoneNum.focus();
    };
  }
};
</script>

<style scoped lang="scss">
.register {
  div {
    padding: 1rem 1.25rem;
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
  p {
    text-align: center;
    input {
      color: #a7a6a6;
      width: 90vw;
      outline: none;
      border: none;
      border-bottom: 1px solid #ddd;
      margin: 1.25rem 0 1.25rem 0;
      padding: 0.74rem 0.94rem 0.74rem 1.88rem;
    }
  }
  button {
    margin-top: 5vh;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 45vw;
    width: 90vw;
    padding: 0.63rem 0;
    font-size: 1rem;
  }
  button:active {
    background: rgb(201, 66, 55) !important;
  }
}
.form {
  position: relative;
}
.form span {
  position: absolute;
  left: 2.7rem;
  top: 2rem;
}
.register .form input {
  background: url("../assets/img/phone.png") no-repeat left center;
  background-size: 1.5rem 1.5rem;
  padding: 0.74rem 0.94rem 0.74rem 3.3rem;
}
.form span {
  color: #a7a6a6;
}

.formInput input {
  background: url("../assets/img/pwd.png") no-repeat left center;
  background-size: 1.5rem 1.5rem;
}
.clear_input {
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 5vw;
  top: 2.1rem;
}
.svg_wrap {
  padding-top: 10vh;
}
p svg {
  width: 4rem;
  height: 4rem;
  padding: 0.63rem;
}
</style>