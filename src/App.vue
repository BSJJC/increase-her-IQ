<template>
  <img src="~@/assets/img.jpg" />
  <IQ_Counter></IQ_Counter>
  <IQ_Adder></IQ_Adder>
</template>

<script>
import IQ_Counter from "./components/IQ_Counter";
import IQ_Adder from "./components/IQ_Adder";

export default {
  name: "App",
  components: {
    IQ_Counter,
    IQ_Adder,
  },
};
</script>

<style>
@import url("./styles/main.css");
</style>
