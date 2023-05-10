const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Stars(x, y, s, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.s = s;
}

function postitionGenerator(num) {
  const starArray = [];

  for (let i = 0; i < num; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = Math.random() * 0.5;
    let dy = Math.random() * 0.5;
    let s = Math.random() * 2;

    const stars = new Stars(x, y, s, dx, dy);
    starArray.push(stars);
  }
  return starArray;
}

const starPos = postitionGenerator(150);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < starPos.length; i++) {
    const thisStar = starPos[i];
    ctx.beginPath();
    ctx.arc(thisStar.x, thisStar.y, thisStar.s, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();

    thisStar.x += thisStar.dx;

    if (thisStar.y > canvas.height + thisStar.s) {
      thisStar.y = -thisStar.s;
    } else if (thisStar.y < -thisStar.s) {
      thisStar.y = canvas.height + thisStar.s;
    }
  }
  requestAnimationFrame(animate);
}

animate();
