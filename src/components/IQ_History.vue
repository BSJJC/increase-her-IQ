<template>
  <div class="IQ-histories-container">
    <div class="IQ-history" v-for="(i, index) in 12" :key="index">
      <template v-if="IQ_Histories[i - 1]">
        {{ IQ_Histories[i - 1] }}
      </template>
      <template v-else> ----- </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IQ_History",

  computed: {
    ...mapState(["IQ_Histories"]),
  },
};
</script>

<style lang="less" scoped>
@import url("../styles/IQ_History.css");
</style>
