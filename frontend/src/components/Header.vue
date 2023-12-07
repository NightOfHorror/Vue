<!-- Header.vue -->

<template>
    <header class="app-header">
      <div class="logo">
        <!-- Inclure le logo ici -->
        <!-- Vous pouvez utiliser une balise <img> ou tout autre élément selon votre logo -->
        <img src="chemin/vers/le/logo.png" alt="Logo" />
      </div>
      <h1 class="title">Jeux de Carte</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
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
  </style>
  