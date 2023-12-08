<template>
  <header class="site-header" :class="{ 'dark-mode': $store.getters.isDarkMode }">
    <div class="logo-container">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Logo du site" class="logo" />
      </router-link>
      <h1 class="site-title">Flip Quiz</h1>
    </div>
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
}
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
  margin:0;
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
/* Styles spécifiques à Header.vue */
}
.site-header {
  background-color: #8BC34A; /* Couleur verte rappelant la nature */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px; /* Ajuste la taille de ton logo */
  margin-right: 10px;
}

.site-title {
  color: #fff; /* Texte blanc */
  font-size: 24px;
  margin: 0;
}

.main-nav {
  display: flex;
  gap: 20px;
}

.main-nav a {
  text-decoration: none;
  color: #fff; /* Texte blanc */
  font-size: 18px;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: #1a1a1a; /* Couleur de fond sombre pour les liens au survol */
}
</style>
