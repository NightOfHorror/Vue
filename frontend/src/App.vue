<template>
  <div id="app" @keydown="handleKeyDown" ref="appRef">
    <Header />
    <FlipCard />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import FlipCard from "@/components/FlipCard.vue";

export default {
  name: "App",
  components: {
    Header,
    FlipCard,
  },
  data() {
    return {
      konamiCode: [],
      konamiSequence: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
    };
  },
  methods: {
    handleKeyDown(event) {
      console.log("Key pressed:", event.key);
      const key = event.key;

      this.konamiCode.push(key);

      if (this.konamiCode.length > this.konamiSequence.length) {
        this.konamiCode.shift();
      }

      if (this.konamiCode.join("") === this.konamiSequence.join("")) {
        // La séquence Konami Code a été entrée
        this.triggerKonamiAction();
        this.konamiCode = []; // Réinitialiser la séquence Konami Code
      }
    },
    triggerKonamiAction() {
      // Action à effectuer lors de la saisie du Konami Code
      alert("Konami Code Activated!");
      // Vous pouvez effectuer d'autres actions ici
    },
    handleBlur() {
      // Force le focus sur l'élément lorsque le focus est perdu
      this.$refs.appRef.focus();
    },
  },
  mounted() {
    // Ajoute un écouteur d'événements pour le clavier
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeDestroy() {
    // Retire l'écouteur d'événements lorsque le composant est détruit
    document.removeEventListener("keydown", this.handleKeyDown);
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