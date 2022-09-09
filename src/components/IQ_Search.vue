<template>
  <div class="search-bar-container">
    <el-input
      v-model.trim="target"
      type="text"
      clearable
      @change="SearchValue(target)"
    >
    </el-input>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IQ_Search",

  data() {
    return {
      target: "",
    };
  },

  computed: {
    ...mapGetters(["SearchValue"]),
  },
};
</script>

<style lang="less" scoped>
@import url("../styles/IQ_Search.css");
</style>
