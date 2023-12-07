<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import FlipCard from "@/components/FlipCard.vue";
import MainMenu from "@/components/MainMenu.vue";


export default {
  components: {
    Header,
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
  margin-top: 70px; /* Ajustez la marge pour éviter que le contenu ne soit caché derrière l'en-tête fixe */
}

h2 {
  margin-bottom: 10px;
}
</style>