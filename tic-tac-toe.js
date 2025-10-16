// Wait until the entire DOM has loaded before running code
document.addEventListener("DOMContentLoaded", function() {

  // 1. Select the game board element
  const board = document.getElementById("board");  // assumes board has id="board"

  // 2. Get all div elements inside the board
  const squares = board.getElementsByTagName("div");

  // 3. Loop through each div and add the "square" class
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

});
