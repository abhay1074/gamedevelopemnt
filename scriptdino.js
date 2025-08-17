const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

let gameStarted = false;

// Ask user to start game on page load
window.onload = function() {
  if (confirm("Press OK to start the game.")) {
    gameStarted = true;
  }
}

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (gameStarted && !dino.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  if (!gameStarted) return; // Don't update if not started

  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = '';
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
