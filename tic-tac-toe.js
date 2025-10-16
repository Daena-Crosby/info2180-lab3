document.addEventListener("DOMContentLoaded", function() {
  const board = document.getElementById("board");
  const squares = board.getElementsByTagName("div");
  const statusDiv = document.getElementById("status");
  const newGameBtn = document.querySelector(".btn");

  // Exercise 1: Style each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Exercise 2: Track game state and turns
  let currentPlayer = "X";
  let gameState = Array(9).fill(null);
  let gameOver = false;

  // Exercise 3: Winning combinations
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

  // Exercise 4: Function to check for a winner
  function checkWinner() {
    for (const [a, b, c] of winningCombos) {
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        const winner = gameState[a];
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add("you-won");
        gameOver = true;
        return true;
      }
    }
    return false;
  }

  // Exercise 5: Handle square clicks
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      // Prevent overwriting and stop play if game over
      if (gameOver || gameState[i] !== null) return;

      gameState[i] = currentPlayer;
      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);

      if (!checkWinner()) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    // Hover effects
    squares[i].addEventListener("mouseover", function() {
      if (!gameOver && !gameState[i]) {
        squares[i].classList.add("hover");
      }
    });

    squares[i].addEventListener("mouseout", function() {
      squares[i].classList.remove("hover");
    });
  }

  // Exercise 6: Reset the game on "New Game" click
  newGameBtn.addEventListener("click", function() {
    // Reset state
    currentPlayer = "X";
    gameState = Array(9).fill(null);
    gameOver = false;

    // Clear board
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
      squares[i].classList.remove("X", "O", "hover");
    }

    // Reset status text and style
    statusDiv.textContent =
      "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");
  });
});
