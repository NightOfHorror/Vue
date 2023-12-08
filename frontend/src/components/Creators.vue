<template>
    <div>
      <main>
        <div class="eco-card">
          <h1 class="card-title">L'équipe Cesi</h1>
          <div class="card-body">
            <div v-for="member in teamMembers" :key="member.name">
              <h2>{{ member.name }}</h2>
              <p>{{ member.role }}</p>
              
            </div>
            <router-link to="/">
                <i class="fas fa-arrow-left"></i>
            </router-link>
          </div>
        </div>

      </main>
    </div>
  </template>
  
  <script>
import '@fortawesome/fontawesome-free/css/all.css';
  export default {
    name: "Creator",
    data() {
      return {
        teamMembers: [
          { name: "Brice Doublet", role: "Il était la" },
          { name: "Matthias Tondut", role: "Il était aussi la " },
          { name: "Lucas Avril", role: "Le design artist" },
          { name: "Thomas Charrier", role: "Le Codeur" },
          { name: "Antoine Merlingeas", role: "Le modo discord" },
          { name: "Lydéric Violot", role: "Le Traître" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à Creator.vue */
  
  main {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Police propre et lisible */
  }
  
  .eco-card {
    z-index:100;
    background-color: #8BC34A; /* Vert rappelant la nature */
    border: 2px solid #4CAF50; /* Bordure verte plus foncée */
    border-radius: 12px; /* Coins arrondis */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Ombre légère */
    width: 600px; /* Ajuste la largeur selon tes besoins */
    padding: 20px;
    color: #fff; /* Texte blanc pour contraster avec le fond vert */
    text-align: center;
    transition: box-shadow 0.5s ease;
  }
  
  .eco-card:hover {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4); /* Ombre plus prononcée au survol */
  }
  
  .card-title {
    font-size: 40px; /* Taille de police réduite */
    margin-top: 0;
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Style additionnel pour les informations sur les membres */
  h2 {
    font-size: 24px;
    margin: 10px 0;
  }
  
  p {
    font-size: 16px;
    color: #fff; /* Texte blanc */
  }
  </style>
  