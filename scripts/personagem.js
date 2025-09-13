const player = document.getElementById("player");

let x = 360;  // posição inicial X
let y = 250;  // posição inicial Y
const step = 10; // velocidade do movimento

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
      y -= step;
      player.src = "assets/personagem/up.png";
      break;
    case "ArrowDown":
    case "s":
      y += step;
      player.src = "assets/personagem/down.png";
      break;
    case "ArrowLeft":
    case "a":
      x -= step;
      player.src = "assets/personagem/left.png";
      break;
    case "ArrowRight":
    case "d":
      x += step;
      player.src = "assets/personagem/right.png";
      break;
  }

  player.style.transform = `translate(${x}px, ${y}px)`;
});