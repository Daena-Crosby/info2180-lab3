document.addEventListener("DOMContentLoaded", function() {
  const board = document.getElementById("board");
  const squares = board.getElementsByTagName("div");
  const statusDiv = document.getElementById("status");

  // Step 1: Style each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Step 2: Track game state and turns
  let currentPlayer = "X";
  let gameState = Array(9).fill(null);
  let gameOver = false;

  // Step 3: Winning combinations (by index positions)
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Step 4: Function to check winner
  function checkWinner() {
    for (const [a, b, c] of winningCombos) {
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        // Winner found!
        const winner = gameState[a];
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add("you-won");
        gameOver = true;
        return true;
      }
    }
    return false;
  }

  // Step 5: Add interactivity
  for (let i = 0; i < squares.length; i++) {
    // Click event
    squares[i].addEventListener("click", function() {
      if (gameOver || gameState[i] !== null) return;

      gameState[i] = currentPlayer;
      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);

      // Check for winner after every move
      if (!checkWinner()) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    // Hover effects
    squares[i].addEventListener("mouseover", function() {
      if (!gameOver && !gameState[i]) squares[i].classList.add("hover");
    });

    squares[i].addEventListener("mouseout", function() {
      squares[i].classList.remove("hover");
    });
  }
});
