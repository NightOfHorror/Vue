<!-- MainMenu.vue -->
<template>
    <div>
      <main>
        <div class="card">
          <div class="card-body">
            <h1>Réchauffement Climatique Quizz</h1>
            <h2 class="card-title">Menu</h2>
            <nav>
              <router-link to="/play">Jouer</router-link>
              <router-link to="/highscore">HighScore</router-link>
              <router-link to="/creators">Créateurs</router-link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    // Logique du composant si nécessaire
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à MainMenu.vue */
  header {
    background-color: #3498db;
    padding: 20px;
    color: white;
    text-align: center;
  }
  
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px; /* Ajuste la largeur de la carte selon tes besoins */
  }
  
  .card-body {
    padding: 20px;
    text-align: center;
  }
  
  /* Style additionnel pour les liens si nécessaire */
  nav a {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  nav a:hover {
    color: #3498db;
  }
  </style>
  