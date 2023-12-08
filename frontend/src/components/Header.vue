<template>
  <header class="site-header">
    <div class="logo-container">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Logo du site" class="logo" />
      </router-link>
      <h1 class="site-title">Flip Quiz</h1>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Styles spécifiques à Header.vue */

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
