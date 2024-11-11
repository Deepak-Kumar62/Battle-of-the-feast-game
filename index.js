const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const userHand = document.querySelector(".hand-icon.user-hand-icon");
const computerHand = document.querySelector(".hand-icon.computer-hand-icon");
const result = document.querySelector(".result");
const computerScore = document.querySelector(".computer-score");
const userScore = document.querySelector(".user-score");

const rockIcon = "🪨";
const paperIcon = "📃";
const scissorsIcon = "✂️";

const iconsList = [rockIcon, paperIcon, scissorsIcon];

const startGame = (selectedIcon, winningIcon) => {
  result.innerText = "";
  userHand.innerText = "🤜";
  computerHand.innerText = "🤛";
  userHand.classList.add("shakeUserHands");
  computerHand.classList.add("shakeComputerHands");

  setTimeout(() => {
    userHand.classList.remove("shakeUserHands");
    computerHand.classList.remove("shakeComputerHands");
    userHand.innerText = selectedIcon;

    const computerChoice = Math.floor(Math.random() * 3);
    computerHand.innerText = iconsList[computerChoice];

    if (computerHand.innerText === selectedIcon) {
      result.innerText = "Draw";
    } else if (computerHand.innerText === winningIcon) {
      result.innerText = "You Won! 🪄";
      userScore.innerText = +userScore.innerText + 1;
    } else {
      result.innerText = "Computer Won!";
      computerScore.innerText = +computerScore.innerText + 1;
    }
  }, 1000);
};

rockBtn.addEventListener("click", () => {
  startGame(rockIcon, scissorsIcon);
});

paperBtn.addEventListener("click", () => {
  startGame(paperIcon, rockIcon);
});

scissorsBtn.addEventListener("click", () => {
  startGame(scissorsIcon, paperIcon);
});
