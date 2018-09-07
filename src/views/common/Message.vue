<template>
    <div class="message">
        <!-- toast -->
        <div id="toast">
        </div>
        <!-- alert弹出框 -->
        <div id="alert" v-if="alertisShow">
            <!-- {{mes}} -->
        </div>
        <!-- confirm -->
        <div id="confirm" v-if="confirmisShow">
            <!-- {{mes}} -->
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "message",
  data() {
    return {
      mes: "错误"
    };
  },
  methods: {},
  mounted() {},
  computed: {
    ...mapState(["toastisShow", "alertisShow", "confirmisShow"])
  }
};
</script>

<style scoped lang="scss">
.message {
  #toast {
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: #474747;
    color: #fff;
    padding: 0.31rem 1.25rem;
    display: none;
    border-radius: 0.31rem;
  }
}
</style>