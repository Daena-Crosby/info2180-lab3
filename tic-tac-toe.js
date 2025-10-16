document.addEventListener("DOMContentLoaded", function() {
  const board = document.getElementById("board");
  const squares = board.getElementsByTagName("div");
  const statusDiv = document.getElementById("status");
  const newGameBtn = document.querySelector(".btn");

  // Step 1: Style each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Step 2: Track game state and turns
  let currentPlayer = "X";
  let gameState = Array(9).fill(null);
  let gameOver = false;

  // Step 3: Winning combinations
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

  // Step 4: Check winner
  function checkWinner() {
    for (const [a, b, c] of winningCombos) {
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        const winner = gameState[a];
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add("you-won");
        gameOver = true;
        return true;
      }
    }
    return false;
  }

  // Step 5: Handle clicks on squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      if (gameOver || gameState[i] !== null) return;

      gameState[i] = currentPlayer;
      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);

      if (!checkWinner()) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    squares[i].addEventListener("mouseover", function() {
      if (!gameOver && !gameState[i]) squares[i].classList.add("hover");
    });

    squares[i].addEventListener("mouseout", function() {
      squares[i].classList.remove("hover");
    });
  }

  // Step 6: Reset button functionality
  newGameBtn.addEventListener("click", function() {
    // Reset all variables
    currentPlayer = "X";
    gameState = Array(9).fill(null);
    gameOver = false;

    // Clear the board
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
      squares[i].classList.remove("X", "O", "hover");
    }

    // Reset the status message
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");
  });
});
