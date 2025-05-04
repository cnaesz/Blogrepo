let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Ties: 0,
  Loses: 0
};

updateScore();

function playGame(playerMove) {
  const cpuMove = autopick();
  let result = "";

  if (playerMove === "Rock") {
    if (cpuMove === "Rock") {
      result = "Tie";
      score.Ties++;
    } else if (cpuMove === "Paper") {
      result = "YOU LOSE!";
      score.Loses++;
    } else {
      result = "Finally a small win for you!";
      score.Wins++;
    }
  } else if (playerMove === "Paper") {
    if (cpuMove === "Rock") {
      result = "Finally a small win for you!";
      score.Wins++;
    } else if (cpuMove === "Paper") {
      result = "Tie";
      score.Ties++;
    } else {
      result = "YOU LOSE!";
      score.Loses++;
    }
  } else if (playerMove === "Scissor") {
    if (cpuMove === "Rock") {
      result = "YOU LOSE!";
      score.Loses++;
    } else if (cpuMove === "Paper") {
      result = "Finally a small win for you!";
      score.Wins++;
    } else {
      result = "Tie";
      score.Ties++;
    }
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  console.log(`You picked ${playerMove}, CPU picked ${cpuMove}. ${result}`);
}

function autopick() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function resetScore() {
  score = { Wins: 0, Ties: 0, Loses: 0 };
  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  alert('Scores successfully reset!');
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = 
    `Score: Wins: ${score.Wins}, Ties: ${score.Ties}, Loses: ${score.Loses}`;
}
