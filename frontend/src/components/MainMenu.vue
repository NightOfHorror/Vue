<template>
    <div>
      <main>
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
  font-family: 'Courier New', Courier, monospace;
}

.game-card {
  background-color: whitesmoke; /* Couleur de fond sombre */
  border: 2px solid #6c757d; /* Bordure grise */
  border-radius: 12px; /* Coins arrondis */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Ombre légère */
  width: 300px;
  padding: 20px;
  color: #2A7AAF; /* Texte blanc */
  align-items: center;
  transition : box-shadow 0.5s ease;
  
}
.game-card:hover {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2); 

}

.card-title {
  font-size: 80px;
  margin-top: 0;
}

.card-body {
  text-align: center;
  display:flex;
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
  background-color: #3498db;
  border: 2px solid #fff;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

div a.button:hover {
  color: #1a1a1a; /* Couleur de fond sombre pour les liens au survol */ /* Couleur bleue pour les liens au survol */
}
</style>
  /* Style additionnel pour les liens si nécessaire */
  nav a {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  