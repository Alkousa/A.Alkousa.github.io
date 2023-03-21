let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let inputLi = document.querySelector(".input-li");

btn.addEventListener("click", function () {
  let newLi = document.createElement("li");
  let newText = document.createTextNode(inputLi.value);

  newLi.appendChild(newText);
  list.appendChild(newLi);
});

let b = document.querySelector(".b");

b.addEventListener("click", function () {
  alert("Hello World!");
});
// let games = {
//   name: "warzon",
//   player: "50m",
//   info() {
//     console.log(this.player);
//   },
// };

// games.info();
