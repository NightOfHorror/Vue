<template>
  <div id="app" @keydown="handleKeyDown" ref="appRef">
    <Header />
    <FlipCard />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "@/components/Header.vue";
import FlipCard from "@/components/FlipCard.vue";
import MainMenu from "@/components/MainMenu.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    FlipCard,
    MainMenu,
  },
  data() {
    return {
      konamiCode: [] as string[],
      konamiSequence: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
    };
  },
  methods: {
    handleKeyDown(event: KeyboardEvent) {
      console.log("Key pressed:", event.key);
      const key = event.key;

      this.konamiCode.push(key);

      if (this.konamiCode.length > this.konamiSequence.length) {
        this.konamiCode.shift();
      }

      if (this.konamiCode.join("") === this.konamiSequence.join("")) {
        // Konami Code sequence entered
        this.triggerKonamiAction();
        this.konamiCode = []; // Reset the Konami Code sequence
      }
    },
    triggerKonamiAction() {
  // Action à effectuer lors de la saisie du Konami Code
  alert("Konami Code Activated!");

  // Ouvrir un nouvel onglet avec la route "/bomberman"

  // Vous pouvez également rediriger l'utilisateur dans l'onglet actuel en utilisant la méthode push de Vue Router
  // Assurez-vous que "/bomberman" correspond à la route de votre composant Bomberman
  if (this.$router) {
    this.$router.push("/bomberman");
  }
},
    handleBlur() {
      // Force le focus sur l'élément lorsque le focus est perdu
      if (this.$refs && this.$refs.appRef) {
        (this.$refs.appRef as HTMLElement).focus();
      }
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
});
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