document.addEventListener("DOMContentLoaded", function() {
  const board = document.getElementById("board");
  const squares = board.getElementsByTagName("div");

  // Step 1: Style each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Step 2: Track game state and turns
  let currentPlayer = "X";
  let gameState = Array(9).fill(null);

  // Step 3: Add interactivity
  for (let i = 0; i < squares.length; i++) {

    // Click to place X or O
    squares[i].addEventListener("click", function() {
      if (gameState[i] !== null) return;

      gameState[i] = currentPlayer;
      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });

    // Mouse hover effect
    squares[i].addEventListener("mouseover", function() {
      // Only add hover effect if square is empty
      if (!gameState[i]) {
        squares[i].classList.add("hover");
      }
    });

    squares[i].addEventListener("mouseout", function() {
      squares[i].classList.remove("hover");
    });
  }
});
