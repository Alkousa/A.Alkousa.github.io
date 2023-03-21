function cal() {
  let x = parseInt(document.querySelector("#value1").value);
  let y = parseInt(document.querySelector("#value2").value);
  let op = document.querySelector("#operator").value;
  let calculate;
  if (op == "min") {
    calculate = x - y;
  } else if (op == "div") {
    calculate = x / y;
  } else if (op == "mul") {
    calculate = x * y;
  } else if (op == "add") {
    calculate = x + y;
  }
  document.querySelector("#results").innerHTML = calculate;
}

let body = document.querySelector("body");
let btn = document.querySelector(".btn");

let colors = ["red, green", "blue"];

btn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * colors.length);

  body.style.cssText = "background-color:colors[r]";
});
