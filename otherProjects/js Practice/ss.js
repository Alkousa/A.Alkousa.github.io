const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

function Positions(num) {
  const position = [];

  for (var i = 0; i < num; i++) {
    let s = Math.pow(Math.random(), 2) * 2 + 0.5;
    let x = Math.random() * (canvas.width - s * 2) + s;
    let y = Math.random() * (canvas.height - s * 2) + s;

    let dx = Math.random() * 1 - 0.5; // random value between -1 and 1
    let dy = Math.random() * 1 - 0.5;
    position.push({ x, y, s, dx, dy });
  }
  return position;
}

const positionArray = Positions(200);

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < positionArray.length; i++) {
    const thisStar = positionArray[i];
    c.beginPath();
    c.arc(thisStar.x, thisStar.y, thisStar.s, 0, Math.PI * 2, false);
    let opacity = Math.pow(Math.random(), 3) * 0.8 + 0.2; // random value between 0.2 and 1, with brighter stars more common
    c.fillStyle = "white";
    c.fill();

    if (thisStar.x + thisStar.s > canvas.width || thisStar.x - thisStar.s < 0) {
      thisStar.dx = -thisStar.dx;
    } else if (
      thisStar.y + thisStar.s > canvas.height ||
      thisStar.y - thisStar.s < 0
    ) {
      thisStar.dy = -thisStar.dy;
    }
    thisStar.x += thisStar.dx;
    thisStar.y += thisStar.dy;
  }

  requestAnimationFrame(animate);
}

animate();
