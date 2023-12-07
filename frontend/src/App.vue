<template>
  <div id="app">
    <FlipCard>
      <!-- Contenu de la face avant de la carte -->
      <template v-slot:frontContent>
        <div>
          <h2>Face Avant</h2>
          <p>Contenu de la face avant de la carte</p>
        </div>
      </template>
      
      <!-- Contenu de la face arrière de la carte -->
      <template v-slot:backContent>
        <div>
          <h2>Face Arrière</h2>
          <p>Contenu de la face arrière de la carte</p>
        </div>
      </template>
    </FlipCard>
  </div>
</template>

<script lang="ts">
import FlipCard from "@/components/FlipCard.vue";


export default {
  components: {
    FlipCard,
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