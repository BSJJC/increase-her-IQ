<template>
  <div class="IQ_Adder_Container">
    <el-input
      v-model="iq_increasement"
      type="number"
      placeholder="Please input"
    >
      <template #prepend>
        <el-button
          @click="
            IQAdd({
              iq_increasement: iq_increasement,
              operation_type: 'minus',
            })
          "
        >
          <el-icon><Minus /></el-icon>
        </el-button>
      </template>
      <template #append>
        <el-button
          @click="
            IQAdd({
              iq_increasement: iq_increasement,
              operation_type: 'plus',
            })
          "
        >
          <el-icon><Plus /></el-icon>
        </el-button>
      </template>
    </el-input>

    <el-button
      id="IQ-change-randomly-btn"
      type="success"
      @click="GetRandomNumber"
      >IQ change randomly</el-button
    >
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "IQ_Adder",

  data() {
    return {
      iq_increasement: 0,
    };
  },

  methods: {
    ...mapMutations( ["IQAdd"]),
    ...mapActions( ["GetRandomNumber"]),
  },
};
</script>

<style lang="less" scoped>
@import url("../styles/IQ_Adder.css");
</style>
