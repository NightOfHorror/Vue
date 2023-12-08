<template>
  <div class="eco-card" @click="handleCardClick">
    <div class="eco-card-inner" :class="{ flipped: isFlipped }">
      <div class="eco-card-front">
        <!-- Contenu de la face avant de la carte (question) -->
        <div class="question">{{ currentQuestion.question }}</div>
        <button @click="answerQuestion(true)" class="green-btn">Vrai</button>
        <button @click="answerQuestion(false)" class="red-btn">Faux</button>
      </div>
      <div class="eco-card-back" :class="{ correctAnswer: isFlipped && isCorrectAnswer, wrongAnswer: isFlipped && !isCorrectAnswer }">
        <!-- Contenu de la face arrière de la carte (réponse) -->
        <div class="answer">{{ currentQuestion.answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
      questions: [
        { question: "Les emballages plastiques sont bons pour l'environnement ?", answer: "Faux" },
        { question: "Le recyclage du papier contribue à la préservation des forêts ?", answer: "Vrai" },
        // Ajoutez d'autres questions et réponses au besoin
      ],
      currentQuestionIndex: 0,
      currentQuestion: {},
      isCorrectAnswer: null,
    };
  },
  methods: {
    handleCardClick() {
      // Si la carte est déjà retournée, réinitialiser pour la prochaine question
      if (this.isFlipped) {
        this.isFlipped = false;
        this.isCorrectAnswer = null;
        this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      } else {
        // Si la carte est à l'avant, la retourner pour montrer la réponse
        this.isFlipped = true;
      }
    },
    answerQuestion(response) {
      // Traiter la réponse de l'utilisateur (peut être étendu selon vos besoins)
      this.isCorrectAnswer = response === (this.currentQuestion.answer === "Vrai");
    },
  },
  mounted() {
    // Initialiser la première question
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  },
};
</script>

<style scoped>
/* Styles spécifiques à EcoCard.vue */

.eco-card {
  display : flex;
  width: 300px;
  height: 300px;
  margin-top: 30px;
  perspective: 1000px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: background-color 0.3s; /* Transition pour le changement de couleur de fond */
}

.eco-card-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.eco-card .eco-card-inner.flipped {
  transform: rotateY(180deg);
}

.eco-card-front,
.eco-card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.eco-card-front {
  background-color: #8BC34A; /* Couleur verte rappelant la nature */
  color: #fff;
}

.eco-card-back {
  color: #fff;
  transform: rotateY(180deg);
  transition: background-color 0.3s; /* Transition pour le changement de couleur de fond */
}

.correctAnswer {
  background-color: #2ecc71; /* Fond vert pour la réponse correcte */
}

.wrongAnswer {
  background-color: #e74c3c; /* Fond rouge pour la réponse incorrecte */
}

.question,
.answer {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  width : 100px;
}

.green-btn {
  background-color: #4CAF50; /* Couleur verte */
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.red-btn {
  background-color: #F44336; /* Couleur rouge */
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049; /* Couleur verte plus foncée pour le survol */
}

.red-btn:hover {
  background-color: #e53935; /* Couleur rouge plus foncée pour le survol */
}
</style>
