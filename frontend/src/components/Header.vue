<!-- Header.vue -->

<template>
  <header :class="{ 'dark-mode': $store.getters.isDarkMode }" class="app-header">
    <h1 class="title">Jeux de Carte</h1>
    <button @click="toggleDarkMode" class="dark-mode-toggle">
      {{ $store.getters.isDarkMode ? 'Mode clair' : 'Mode sombre' }}
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.$store.commit('toggleDarkMode', this.darkMode);
    },
  },
};
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #3498db; /* Couleur de fond de l'en-tête */
  color: #fff; /* Couleur du texte de l'en-tête */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 50px; /* Ajustez la taille du logo selon vos besoins */
  height: 50px; /* Ajustez la taille du logo selon vos besoins */
}

.title {
  margin: 0;
  text-align: center; /* Centrer le texte */
  width: 100%; /* Assurez-vous que le texte ne dépasse pas de l'écran */
}

.dark-mode-toggle {
  background-color: #fff;
  color: #3498db;
  border: none;
  padding: 8px;
  cursor: pointer;
}
.dark-mode {
  background-color: #2c3e50; /* Couleur de fond en mode sombre */
  color: #ecf0f1; /* Couleur du texte en mode sombre */
}

/* ... Autres styles ... */

.dark-mode-toggle {
  background-color: #fff;
  color: #3498db;
  border: none;
  padding: 8px;
  cursor: pointer;
}
</style>
