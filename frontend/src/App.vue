<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import FlipCard from "@/components/FlipCard.vue";
import MainMenu from "@/components/MainMenu.vue";


export default {
  components: {
    FlipCard,
    MainMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin-bottom: 10px;
}
</style>