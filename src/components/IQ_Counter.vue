<template>
  <h1 :class="counterClasses">Her IQ: {{ counter }}</h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "iq_counter",

  computed: {
    ...mapState(["counter"]),

    counterClasses() {
      if (this.counter > 0) return "gtZero";
      else return "lteZero";
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../styles/IQ_Counter.css");
</style>
