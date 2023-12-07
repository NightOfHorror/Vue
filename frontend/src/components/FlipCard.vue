<template>
    <div class="flip-card" @click="handleCardClick">
      <div class="flip-card-inner" :class="{ flipped: isFlipped }">
        <div class="flip-card-front">
          <!-- Contenu de la face avant de la carte (question) -->
          <div class="question">{{ currentQuestion.question }}</div>
          <button @click="answerQuestion(true)">Vrai</button>
          <button @click="answerQuestion(false)">Faux</button>
        </div>
        <div class="flip-card-back" :class="{ correctAnswer: isFlipped && isCorrectAnswer, wrongAnswer: isFlipped && !isCorrectAnswer }">
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
          { question: "Est-ce que la Terre est plate ?", answer: "Faux" },
          { question: "Le Soleil tourne autour de la Terre ?", answer: "Faux" },
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
  .flip-card {
    width: 300px;
    height: 300px;
    perspective: 1000px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s; /* Transition pour le changement de couleur de fond */
  }
  
  .flip-card-inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .flip-card-front {
    background-color: #3498db;
    color: #fff;
  }
  
  .flip-card-back {
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
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  