<template>
  <div id="app" @keydown="handleKeyDown" ref="appRef" :class="{ 'dark-mode': isDarkMode }">
    <Header @toggle-mode="toggleDarkMode"></Header>
    <Background />
    <router-view></router-view>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "@/components/Header.vue";
import FlipCard from "@/components/FlipCard.vue";
import MainMenu from "@/components/MainMenu.vue";
import Creators from "@/components/Creators.vue";
import Background from "@/components/background.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    FlipCard,
    MainMenu,
    Creators,
    Background
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },

  data() {
    return {
      konamiCode: [] as string[],
      konamiSequence: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
    };
  },
  methods: {
    toggleDarkMode() {


            var hour = "day";
            console.log("ok1");
            const toggleButton = document.getElementById("toggleButton");
            const nightToAnimate = document.getElementById("night");
            const dayToAnimate = document.getElementById("day");
            const nightbackgroundToAnimate = document.getElementById("backgroundnight");
            console.log(nightToAnimate);
            toggleButton?.addEventListener("click", function () {
                console.log("ok");
                if (hour == "day"/*toggleButton.checked*/) {
                    // Code à exécuter lorsque le bouton est activé
                    console.log("Bouton activé");
                    dayToAnimate?.classList.add("deactiveday");
                    dayToAnimate?.classList.remove("activeday");
                    nightToAnimate?.classList.add("activenight");
                    nightToAnimate?.classList.remove("deactivenight");
                    nightbackgroundToAnimate?.classList.remove("deactivate");
                    hour = "night";
                } else {
                    // Code à exécuter lorsque le bouton est désactivé
                    dayToAnimate?.classList.add("activeday");
                    dayToAnimate?.classList.remove("deactiveday");
                    nightToAnimate?.classList.add("deactivenight");
                    nightToAnimate?.classList.remove("activenight");
                    nightbackgroundToAnimate?.classList.add("deactivate");
                    hour = "day";
                }
            });
        
},
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
  alert("Konami Code Activated! click here to continue");

  // Vous pouvez également rediriger l'utilisateur dans l'onglet actuel en utilisant la méthode push de Vue Router
  // Assurez-vous que "/bomberman" correspond à la route de votre composant Bomberman
  if (this.$router) {
    this.$router.push("/tictactoe");
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
html, body {
  height: 100%;
  margin: 0;
}

.dark-mode {
  background-color: #333; /* Changer la couleur d'arrière-plan en mode sombre */
  color: #fff; /* Changer la couleur du texte en mode sombre */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px !important; /* Ajustez la marge pour éviter que le contenu ne soit caché derrière l'en-tête fixe */
  min-height: 100%; /* Ajustez la hauteur minimale pour couvrir tout l'écran */
  display: flex;
  flex-direction: column;
}

h2 {
  margin-bottom: 10px;
}
</style>