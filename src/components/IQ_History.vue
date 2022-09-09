<template>
  <div class="IQ-histories-container">
    <div
      v-for="(i, index) in 12"
      :key="index"
      class="IQ-history"
      :class="IQ_Search_Targets_Indexes.includes(index) && 'focus'"
    >
      <template v-if="IQ_Histories[i - 1]">
        {{ IQ_Histories[i - 1] }}
      </template>
      <template v-else> ----- </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "IQ_History",

  computed: {
    ...mapState(["IQ_Histories", "IQ_Search_Targets_Indexes"]),
    ...mapGetters(["SearchValue"]),
  },
};
</script>

<style lang="less" scoped>
@import url("../styles/IQ_History.css");
</style>
