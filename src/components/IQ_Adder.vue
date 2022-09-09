<template>
  <div>
    <button @click="test">test</button>
    <el-input
      v-model="iq_increasement"
      type="number"
      placeholder="IQ increasement"
    >
      <template #prepend>
        <el-button
          ><el-icon><Minus /></el-icon
        ></el-button>
      </template>
      <template #append>
        <el-button
          ><el-icon><Plus /></el-icon
        ></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "IQ_Adder",

  data() {
    return {
      iq_increasement: 0,
    };
  },

  computed: {
    ...mapMutations(["test"]),
  },
};
</script>

<style lang="less" scoped>
@import url("../styles/IQ_Adder.css");
</style>
