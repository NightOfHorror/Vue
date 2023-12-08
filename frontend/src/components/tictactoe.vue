<template>
 <div id="app" class="game-container">
    <div v-if="winner">
      <h2>{{ winner }} a gagné!</h2>
    </div>
    <div v-else>
      <h2>{{ currentPlayer }} à toi de jouer!</h2>
    </div>

    <table class="board">
      <tr v-for="(row, rowIndex) in board" :key="rowIndex" class="board-row">
        <td
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="cell"
          @click="cellClicked(rowIndex, colIndex)"
        >
          {{ cell }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPlayer: 'X',
      winner: null,
      board: Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)),
    };
  },
  methods: {
    cellClicked(row, col) {
  if (!this.board[row][col] && !this.winner && this.currentPlayer === 'X') {
    this.$set(this.board[row], col, this.currentPlayer);
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
    } else {
      this.currentPlayer = 'O'; // L'utilisateur ne peut jouer que des croix, donc on passe toujours à 'O' pour le bot
      this.botMove();
      if (this.checkWinner()) {
        this.winner = 'O';
      }
    }
  }
},
checkWinner() {
  // Vérifie les lignes
  for (let i = 0; i < 3; i++) {
    if (
      this.board[i][0] &&
      this.board[i][0] === this.board[i][1] &&
      this.board[i][1] === this.board[i][2]
    ) {
      return true;
    }
  }

  // Vérifie les colonnes
  for (let i = 0; i < 3; i++) {
    if (
      this.board[0][i] &&
      this.board[0][i] === this.board[1][i] &&
      this.board[1][i] === this.board[2][i]
    ) {
      return true;
    }
  }

  // Vérifie les diagonales
  if (
    this.board[0][0] &&
    this.board[0][0] === this.board[1][1] &&
    this.board[1][1] === this.board[2][2]
  ) {
    return true;
  }
  if (
    this.board[0][2] &&
    this.board[0][2] === this.board[1][1] &&
    this.board[1][1] === this.board[2][0]
  ) {
    return true;
  }

  return false;
},
botMove() {
  // Fonction pour le mouvement du bot
  if (!this.winner) {
    let row, col;
    do {
      // Choisis une position aléatoire
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    } while (this.board[row][col]); // Répète si la case est déjà occupée

    // Remplit la case avec le symbole du bot ('O')
    this.$set(this.board[row], col, 'O');
    this.currentPlayer = 'X'; // Après le mouvement du bot, on rétablit currentPlayer à 'X' pour permettre à l'utilisateur de jouer
  }
},
  },
};
</script>
<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.game-container {
  z-index:105;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.board {
  border-collapse: collapse;
  margin-top: 20px;
}

.board-row {
  display: flex;
}

.cell {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  font-size: 2em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cell:hover {
  background-color: #ddd;
}
</style>