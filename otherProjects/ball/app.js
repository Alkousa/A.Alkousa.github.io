const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");

const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 4,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = "coral";
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  drawCircle();

  //change position
  circle.x += circle.dx;
  circle.y += circle.dy;

  //detect walls

  if (circle.x + circle.size > myCanvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1;
  }
  //detect bottom and top
  if (circle.y + circle.size > myCanvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1;
  }
  requestAnimationFrame(update);
}

update();
