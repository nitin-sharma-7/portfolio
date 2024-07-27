// var div = document.createElement("div");

var body = document.querySelector("body");
var container = document.createElement("div");
body.append(container);
container.className = "container";

var rollDice = document.createElement("button");
rollDice.innerText = "roll Dice";
rollDice.classList.add("rollDice");

body.append(rollDice);
rollDice.addEventListener("click", nitin);
rollDice.addEventListener("click", diceRollSound);

let playerPosition = 0;
const snakes = {
  43: 17,
  50: 5,
  56: 8,
  73: 15,
  84: 58,
  87: 49,
  98: 40,
};
const ladders = {
  2: 23,
  6: 45,
  20: 59,
  52: 72,
  57: 96,
  71: 92,
};
// using closure (loop inside loop)
for (var i = 100; i >= 1; i = i - 20) {
  for (a = i; a > i - 10; a--) {
    var cell = document.createElement("div");
    // cell.innerText = a;
    cell.className = "cell";
    cell.id = `cell-${a}`;
    container.append(cell); // cell append to container to create bord
  }
  for (b = i - 19; b <= i - 10; b++) {
    var cell = document.createElement("div");
    // cell.innerText = b;
    cell.className = "cell";
    cell.id = `cell-${b}`;
    container.append(cell);
  }
}
function updatePlayerPosition() {
  var removePlayer = document.querySelectorAll(".cell");
  removePlayer.forEach((cell) => cell.classList.remove("player"));
  //arrow function

  var playerAt = document.querySelector(`#cell-${playerPosition}`);
  playerAt.classList.add("player");
}

function diceRollSound() {
  var sound = new Audio();
  sound.src = "sound/dice-roll.mp3";
  sound.play();
}
function snakeBite() {
  var sound = new Audio();
  sound.src = "sound/snakebite.mp3";
  sound.play();
}
function ladderClimb() {
  var sound = new Audio();
  sound.src = "sound/ladderclimb.mp3";
  sound.play();
}
function winner() {
  var sound = new Audio();
  sound.src = "sound/winner.mp3";
  sound.play();
}
function nitin() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var playerNewPosition = playerPosition + randomNumber;
  var state = document.querySelector(".state");
  state.innerText = "you got " + randomNumber;

  if (snakes[playerNewPosition]) {
    state.textContent +=
      ". Bitten by snake, go down to" + `${snakes[playerNewPosition]}`;
    playerNewPosition = snakes[playerNewPosition];
    snakeBite();
  } else if (ladders[playerNewPosition]) {
    state.textContent += " Climbed a ladder, go up to "`${ladders[playerNewPosition]}`;
    playerNewPosition = ladders[playerNewPosition];
    ladderClimb();
  }
  if (playerNewPosition === 100) {
    state.textContent += ". Congratulations! You won!";
    winner();
  }
  if (playerNewPosition > 100) {
    state.textContent = "can`t move";
    return;
  }
  playerPosition = playerNewPosition;
  updatePlayerPosition();
  // var diceImage = "dice" + randomNumber + ".png";
  // console.log(diceImage);
}
