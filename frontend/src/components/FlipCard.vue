<template>
    <div class="flip-card" @click="handleCardClick" :class="{ 'dark-mode': $store.getters.isDarkMode }">
      <div class="flip-card-inner" :class="{ flipped: isFlipped }">
        <div class="flip-card-front">
          <!-- Contenu de la face avant de la carte (question) -->
          <div class="question">{{ currentQuestion.question }}</div>
          <button @click="answerQuestion(true)">Vrai</button>
          <button @click="answerQuestion(false)">Faux</button>
        </div>
        <div class="flip-card-back" :class="{ correctAnswer: isFlipped && isCorrectAnswer, wrongAnswer: isFlipped && !isCorrectAnswer }">
          <!-- Contenu de la face arrière de la carte (réponse) -->
          <div class="answer">{{ isCorrectAnswer ? 'Bonne réponse' : 'Mauvaise réponse' }}</div>
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
        {
    "id": 1,
    "question": "Les citadins polluent plus que les ruraux",
    "answer": "FAUX",
    "explication": "  Les habitants des grandes villes utilisent peu leur automobile (quand ils en ont une), leur préférant les transports en commun et/ou le vélo ; alors que ceux des campagnes l’empruntent quotidiennement pour des trajets plus longs. Par ailleurs, les logements en ville sont plus petits, utilisent moins d’énergie et émettent donc moins de CO2. Cet écart se confirme entre les petites et les moyennes agglomérations. Selon l’Observatoire du bilan carbone des ménages, « le bilan carbone des foyers habitant dans les agglomérations de moins de 20 000 habitants est le plus élevé : 4352 kg de CO2, contre 3495 kg de CO2 pour celles comprises entre 100 000 et 199 999 habitants »."
  },
  {
    "id": 2,
    "question": "L’épargne pollue plus que les 4×4",
    "answer": "VRAI",
    "explication": " « Alors que les six groupes bancaires français affichent depuis 2015 leur volonté de s’aligner avec les objectifs de l’accord de Paris, ces engagements en restent très largement au stade des promesses », dénonce l’ONG Oxfam France. Le principal problème ? L’argent que les banques octroient au soutien et au développement de nouveaux projets de pétrole et de gaz. Toujours selon l’ONG, l’empreinte carbone des grandes banques françaises représenterait près de huit fois les émissions de gaz à effet de serre de la France entière ; et atteindrait plus de 3,3 milliards de tonnes équivalent CO2."
  },
  {
    "id": 3,
    "question": "Le nucléaire produit un max de CO2",
    "answer": "FAUX",
    "explication": "En 2019, une étude BVA pour Orano révélait que 69 % des Français pensaient que le nucléaire influait sur le réchauffement climatique. Or, si la question des déchets et des accidents est bien réelle, le nucléaire se révèle une source d’énergie propre. Elle se place même devant les éoliennes et les panneaux solaires en termes de production de CO2 nécessaire pour produire un kilowatt-heure. La France est notamment la championne hors catégorie avec des centrales qui produisent seulement six grammes de CO2 par kWh ; contre 12 pour les éoliennes ; 50 pour les panneaux solaires ; et… 800 pour le charbon (chiffres ADEME, agence de la transition écologique)."
  },
  {
    "id": 4,
    "question": "Plus on est riche, plus on pollue",
    "answer": "VRAI",
    "explication": "« La quantité de CO2 est clairement croissante avec le niveau de vie, et plus spécifiquement avec la capacité à consommer des loisirs », explique l’Observatoire du bilan carbone des ménages. Le bilan carbone par individu est notablement plus élevé au sein des foyers des cadres supérieurs ; avec 8 580 kg de CO2 par individu contre 7 388 kg de CO2 pour l’ensemble. Les transports avec de plus grosses voitures et l’usage de l’avion, gros responsable des émissions de CO2. Ainsi, 59 % des cadres supérieurs font au moins un voyage en avion au cours de l’année. L’avion pèse ainsi 38 % des émissions transport des cadres supérieurs. Les ménages les plus modestes (moins de 1 250 euros nets mensuels) ont, eux, les bilans carbone les plus faibles."
  },
  {
    "id": 5,
    "question": "le train est plus écologique que l'avion",
    "answer": "VRAI",
    "explication": "Selon les données de l’ADEME, le train est le mode de locomotion le plus écolo. Le TGV équivaut à environ 14 g de CO₂ par kilomètre contre 285 g pour l'avion. Les bateaux eux polluent aussi via les eaux usées et les particules fines rejetées dans l’air."
  },
  {
    "id": 6,
    "question": "Les canettes en aluminium sont recyclables à l’infini pour en faire de nouvelles canettes.",
    "answer": "FAUX",
    "explication": "Pour réaliser des canettes, l’aluminium utilisé doit être d’une grande pureté. Malheureusement, l’encre et le film plastique qui recouvre l’intérieur des canettes rendent cet aluminium impossible à recycler en nouvelles canettes. Les canettes sont généralement recyclées en meubles ou en ustensiles de cuisine. "
  },
  {
    "id": 7,
    "question": "Les fruits et légumes de l'agriculture biologique sont réputés pour avoir davantage de vitamines.",
    "answer": "FAUX",
    "explication": "C’est une idée reçue. Les fruits et légumes bios ne possèdent pas de meilleures propriétés nutritionnelles. Cependant, en évitant la contamination à la plupart des produits chimiques, un produit bio est un peu meilleur pour la santé qu’un produit non bio."
  },
  {
    "id": 8,
    "question": "Les fruits et légumes bios pourrissent généralement plus vite.",
    "answer": "VRAI",
    "explication": "C’est généralement vrai. Les produits bio sont davantage récoltés à maturité. De plus, certains légumes et fruits non bios peuvent être traités avec des conservateurs pour garder le plus longtemps une belle apparence. Il est donc déconseillé d’acheter trop de fruits et légumes bios en avance pour éviter le gâchis alimentaire."
  },
  {
    "id": 9,
    "question": "Vous venez de voir un super projet pour la Nuit de L'info",
    "answer": "VRAI",
    "explication": "Nan en vrai, c'est cool comme idée non?"
  }
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
        this.isCorrectAnswer = response === (this.currentQuestion.answer === "VRAI"); // Utiliser "VRAI" au lieu de "Vrai"
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
  .dark-mode .flip-card {
  background-color: #2c3e50; /* Couleur de fond en mode sombre */
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
  