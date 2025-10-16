document.addEventListener("DOMContentLoaded", function() {
  const board = document.getElementById("board");
  const squares = board.getElementsByTagName("div");

  // Step 1: Style each square (from previous task)
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Step 2: Track game state and turns
  let currentPlayer = "X";               // Start with X
  let gameState = Array(9).fill(null);   // Empty array to hold the board state

  // Step 3: Add event listeners for clicks
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {

      // Prevent overwriting an already played square
      if (gameState[i] !== null) {
        return;
      }

      // Record move
      gameState[i] = currentPlayer;

      // Display X or O in the square
      squares[i].textContent = currentPlayer;

      // Add the styling class
      squares[i].classList.add(currentPlayer);

      // Switch player turn
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  }
});
