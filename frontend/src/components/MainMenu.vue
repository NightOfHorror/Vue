<template>
    <div>
      <main class="overall" :class="{ 'dark-mode': $store.getters.isDarkMode }">
        <div class="game-card">
          <h1 class="card-title">Menu</h1>
          <div class="card-body">
            <div>
              <router-link class="button" to="/play">Jouer</router-link>
              <router-link class="button" to="/highscore">HighScore</router-link>
              <router-link class="button" to="/creators">Créateurs</router-link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainMenu"
  };
  </script>
  
  <style scoped>
/* Styles spécifiques à MainMenu.vue */

main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  margin-top: 50px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Police propre et lisible */
}

.game-card {
  z-index:100;
  background-color: #8BC34A; /* Couleur de fond sombre */
  border: 2px solid #4CAF50; /* Bordure grise */
  border-radius: 12px; /* Coins arrondis */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Ombre légère */
  width: 300px;
  padding: 20px;
  color: #FFF; /* Texte blanc */
  align-items: center;
  transition: box-shadow 0.5s ease;
}

.game-card:hover {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4); 
}

.card-title {
  font-size: 80px;
  margin-top: 0;
}

.card-body {
  text-align: center;
  display: flex;
  justify-content: center;
}

/* Style additionnel pour les liens si nécessaire */
div a.button {
  display: flex;
  justify-content: center;
  padding: 10px 40px;
  margin: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #4CAF50;
  border: 2px solid #fff;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-mode div a.button {
  background-color: #2c3e50; /* Couleur de fond sombre pour les liens en mode sombre */
}

div a.button:hover {
  color: #1a1a1a;
}

.dark-mode div a.button:hover {
  color: #bdc3c7; /* Couleur de fond sombre pour les liens au survol en mode sombre */
}
</style>