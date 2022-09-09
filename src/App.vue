<template>
  <img src="~@/assets/img.jpg" />
  <IQ_Counter></IQ_Counter>
  <IQ_Adder></IQ_Adder>
  <IQ_History></IQ_History>
  <IQ_Search></IQ_Search>
</template>

<script>
import IQ_Counter from "./components/IQ_Counter";
import IQ_Adder from "./components/IQ_Adder";
import IQ_History from "./components/IQ_History";
import IQ_Search from "./components/IQ_Search";

export default {
  name: "App",
  components: {
    IQ_Counter,
    IQ_Adder,
    IQ_History,
    IQ_Search,
  },
};
</script>

<style>
@import url("./styles/main.css");
</style>
