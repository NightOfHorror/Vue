<template>
    <div class="flip-card-container">
      <div class="flip-card" @click="flipCard">
        <div class="flip-card-inner" :class="{ flipped: isFlipped }">
          <div class="flip-card-front">
            <!-- Contenu de la face avant de la carte -->
            <slot name="frontContent">Front Content</slot>
          </div>
          <div class="flip-card-back">
            <!-- Contenu de la face arrière de la carte -->
            <slot name="backContent">Back Content</slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFlipped: false,
      };
    },
    methods: {
      flipCard() {
        this.isFlipped = !this.isFlipped;
      },
    },
  };
  </script>
  
  <style scoped>
  .flip-card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Utilisation de la hauteur de la vue pour centrer verticalement */
  }
  
  .flip-card {
    width: 300px; /* Ajuster la largeur selon vos préférences */
    height: 300px;
    perspective: 1000px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .flip-card-inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card .flip-card-inner.flipped {
    transform: rotateY(180deg);
  }
  
  .flip-card-front,
  .flip-card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column; /* Ajustement pour aligner correctement le texte */
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  
  .flip-card-front {
    background-color: #3498db;
    color: #fff;
  }
  
  .flip-card-back {
    background-color: #2ecc71;
    color: #fff;
    transform: rotateY(180deg);
  }
  </style>
  