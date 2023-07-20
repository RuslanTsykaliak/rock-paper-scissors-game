document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const playerChoice = document.querySelector(".playerChoice");
  const resultContainer = document.getElementById("resultContainer");
  const playAgainButton = document.getElementById("playAgainButton");

  // Function to display the game section
  function displayGameSection() {
    menu.style.display = "none";
    playerChoice.style.display = "block";
  }

  // Function to hide the game section
  function hideGameSection() {
    playerChoice.style.display = "none";
  }

  // Function to display the result in the resultContainer
  function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
    resultContainer.style.display = "block";
  }

  // Function to hide the resultContainer
  function hideResult() {
    resultContainer.style.display = "none";
  }

  // Function to reset the input field
  function resetInput() {
    const playerChoiceInput = document.getElementById("playerChoiceInput");
    playerChoiceInput.value = "";
  }

  // Function to play the game
  function playGame() {
    const playerChoiceInput = document.getElementById("playerChoiceInput");
    const playerChoice = playerChoiceInput.value.trim().toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

      const result =
        playerChoice === computerChoice
          ? "Tie game!"
          : (playerChoice === "rock" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "rock")
          ? `You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nComputer wins!`
          : `You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nYou win!`;

      displayResult(result);
    } else {
      displayResult("Invalid choice. Please enter rock, paper, or scissors.");
    }
  }

  // Event listener for the "Yes" button in the menu options
  const yesButton = document.getElementById("yesButton");
  yesButton.addEventListener("click", function () {
    hideGameSection();
    hideResult();
    resetInput();
    displayGameSection();
  });

  // Event listener for the "No" button in the menu options
  const noButton = document.getElementById("noButton");
  noButton.addEventListener("click", function () {
    hideGameSection();
    displayResult("Ok, maybe next time.");
    playAgainButton.style.display = "none"; // Hide the "Play Again" button
  });

  // Event listener for the "Play" button
  const playButton = document.getElementById("playButton");
  playButton.addEventListener("click", function () {
    hideResult();
    playGame();
  });

  // Event listener for the "Play Again" button
  playAgainButton.addEventListener("click", function () {
    hideResult();
    resetInput();
    displayGameSection();
  });

  // Hide the game section and resultContainer initially
  hideGameSection();
  hideResult();
});
